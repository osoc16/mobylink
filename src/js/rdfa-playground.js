/**
 * The RDFa play is used to test out RDFa markup in HTML.
 *
 * @author Manu Sporny <msporny@digitalbazaar.com>
 */
(function($) {
  RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
  RDF_PLAIN_LITERAL = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral';
  RDF_TYPED_LITERAL = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#TypedLiteral';
  RDF_XML_LITERAL = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral';
  RDF_OBJECT = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object';

  // create the play instance if it doesn't already exist
  window.play = window.play || {};
  var play = window.play;

  // The CodeMirror editor
  play.editor = null;

  // The CodeMirror triple display
  play.outputDisplay = null;

  // the counter is used to throttle previews and triple generation
  play.processDelay = 500;

  // the process timeout is used to keep track of the preview and triple
  // processing timeout
  play.processTimeout = null;

  // known prefixes used to shorten IRIs during the TURTLE transformation
  play.knownPrefixes = {
    // w3c
    'grddl': 'http://www.w3.org/2003/g/data-view#',
    'ma': 'http://www.w3.org/ns/ma-ont#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfa': 'http://www.w3.org/ns/rdfa#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'rif': 'http://www.w3.org/2007/rif#',
    'skos': 'http://www.w3.org/2004/02/skos/core#',
    'skosxl': 'http://www.w3.org/2008/05/skos-xl#',
    'wdr': 'http://www.w3.org/2007/05/powder#',
    'void': 'http://rdfs.org/ns/void#',
    'wdrs': 'http://www.w3.org/2007/05/powder-s#',
    'xhv': 'http://www.w3.org/1999/xhtml/vocab#',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    // non-rec w3c
    'sd': 'http://www.w3.org/ns/sparql-service-description#',
    'org': 'http://www.w3.org/ns/org#',
    'gldp': 'http://www.w3.org/ns/people#',
    'cnt': 'http://www.w3.org/2008/content#',
    'dcat': 'http://www.w3.org/ns/dcat#',
    'earl': 'http://www.w3.org/ns/earl#',
    'ht': 'http://www.w3.org/2006/http#',
    'ptr': 'http://www.w3.org/2009/pointers#',
    // widely used
    'cc': 'http://creativecommons.org/ns#',
    'ctag': 'http://commontag.org/ns#',
    'dc': 'http://purl.org/dc/terms/',
    'dcterms': 'http://purl.org/dc/terms/',
    'foaf': 'http://xmlns.com/foaf/0.1/',
    'gr': 'http://purl.org/goodrelations/v1#',
    'ical': 'http://www.w3.org/2002/12/cal/icaltzd#',
    'og': 'http://ogp.me/ns#',
    'rev': 'http://purl.org/stuff/rev#',
    'sioc': 'http://rdfs.org/sioc/ns#',
    'v': 'http://rdf.data-vocabulary.org/#',
    'vcard': 'http://www.w3.org/2006/vcard/ns#',
    'schema': 'http://schema.org/'
  }

  /**
   * Used to initialize the UI, call once on document load.
   */
  play.init = function() {
    // Initialize CodeMirror editor and the update callbacks
    var editor = document.getElementById('editor');
    var editorOptions = {
      mode: 'text/html',
      lineNumbers: true,
      tabMode: 'indent',
      onChange: function() {
        clearTimeout(play.processDelay);
        play.processDelay = setTimeout(play.process, 300);
      }
    };

    play.editor = CodeMirror.fromTextArea(editor, editorOptions);
    setTimeout(play.process, 300);

  };

  /**
   * Process the RDFa markup that has been input and display the output
   * in the active tab.
   */
  play.process = function() {
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    preview.open();
    preview.write(play.editor.getValue());
    preview.close();

    if (!preview.data) {
      GreenTurtle.attach(preview);
    } else {
      GreenTurtle.attach(preview, true);
    }

    // iterate through all triples and insert them into the output display
    var d3Nodes = play.toD3TreeGraph(preview.data);
    play.viz.redraw(d3Nodes);
  };

  /**
   * Attempts to retrieve the short name of an IRI based on the fragment
   * identifier or last item in the path.
   *
   * @param iri the IRI to process
   * @param hashify if true, pre-pend a hash character if the shortening results
   *                in a fragment identifier.
   * @returns a short name or the original IRI if a short name couldn't be
   *          generated.
   */
  play.getIriShortName = function(iri, hashify) {
    var rval = iri;

    // find the last occurence of # or / - short name is everything after it
    if (iri.indexOf('#') >= 0) {
      if (hashify) {
        rval = '#' + iri.split('#').pop();
      } else {
        rval = iri.split('#').pop();
      }
    } else if (iri.indexOf('/') >= 0) {
      rval = iri.split('/').pop();
    }

    // don't allow the entire IRI to be optimized away
    if (rval.length < 1) {
      rval = iri;
    }

    return rval;
  };

  /**
   * Converts the RDFa data in the page to a D3 tree graph for visualization.
   *
   * @param data the reference to the RDFa DataDocument API.
   */
  play.toD3TreeGraph = function(data) {
    var bnodeNames = {};
    var bnodeCount = 1;
    var rval = {
      'name': 'Web Page',
      'children': []
    };

    var subjects = data.getSubjects();
    var embedded = {};

    var createNode = function(s, p, data, rval, ancestors) {
      var triples = data.getSubject(s);
      var predicates = triples === null ? [] : triples.predicates;
      var name = '';
      var node = {
        'name': '',
        'children': []
      };

      // calculate the short name of the node
      // prepend the predicate name if there is one
      if (p !== undefined) {
        name = play.getIriShortName(p) + ': ';
      }

      // keep track of subjects that we're branching from
      // to avoid recursing into them again.
      if (ancestors === undefined) {
        ancestors = [];
      }
      ancestors = ancestors.concat(s);

      if (s.charAt(0) == '_') {
        name += 'Item ' + bnodeNames[s];
      } else if (p == RDF_TYPE) {
        name += play.getIriShortName(s);
      } else {
        name += play.getIriShortName(s, true);
      }
      node.name = name;

      // create nodes for all predicates and objects
      for (p in predicates) {
        // do not include which vocabulary was used in the visualization
        if (p == "http://www.w3.org/ns/rdfa#usesVocabulary") {
          continue;
        }

        var objects = triples.predicates[p].objects;
        for (oi in objects) {
          var value = '';
          var o = objects[oi];

          if (o.type == RDF_OBJECT && ancestors.indexOf(o.value) == -1) {
            // recurse to create a node for the object if it's an object
            // and is not referring to itself
            createNode(o.value, p, data, node, ancestors);
            embedded[o.value] = true;
          } else {
            // generate the leaf node
            var name = '';
            if (o.type == RDF_XML_LITERAL) {
              // if the property is an XMLLiteral, serialise it
              name = play.nodelistToXMLLiteral(o.value);
            } else if (o.type == RDF_OBJECT) {
              // shorten any IRIs (if the property is referring to the
              // object itself)
              name = play.getIriShortName(o.value, true);
            } else {
              name = o.value;
            }

            var child = {
              'name': play.getIriShortName(p) + ': ' + name
            };
            node.children.push(child);
          }
        }
      }

      // remove the children property if there are no children
      if (node.children.length === 0) {
        node.children = undefined;
      }
      // collapse children of nodes that have already been embedded
      if (embedded[s] !== undefined && node.children !== undefined) {
        node._children = node.children;
        node.children = undefined;
      }

      rval.children.push(node);
    };

    // Pre-generate names for all bnodes in the graph
    for (si in subjects) {
      var s = subjects[si];

      // calculate the short name of the node
      if (s.charAt(0) == '_' && !(s in bnodeNames)) {
        bnodeNames[s] = bnodeCount;
        bnodeCount += 1;
      }
    }

    // Generate the D3 tree graph
    for (si in subjects) {
      var s = subjects[si];
      createNode(s, undefined, data, rval);
    }

    // clean up any top-level children with no data
    var cleaned = [];
    for (c in rval.children) {
      var child = rval.children[c];
      if (child.children !== undefined) {
        cleaned.push(child);
      }
    }
    rval.children = cleaned;

    return rval;
  };

  /**
   * Attempts to compress an IRI and updates a map of used prefixes if the
   * compression was successful.
   *
   * @param iri the IRI to compress into a Compact URI Expression.
   * @param prefixes the map of prefixes that have already been compressed.
   */
  play.iriToCurie = function(iri, prefixes) {
    var rval = iri;
    var detectedPrefix = false;

    for (prefix in play.knownPrefixes) {
      var expanded = play.knownPrefixes[prefix];

      // if the IRI starts with a known CURIE prefix, compact it
      if (iri.indexOf(expanded) == 0) {
        rval = prefix + ':' + iri.replace(expanded, '');
        prefixes[prefix] = expanded;
        break;
      }
    }

    if (rval.length == iri.length) {
      rval = '<' + iri + '>';
    }

    return rval;
  };

  /**
   * Converts a NodeList into an rdf:XMLLiteral string.
   *
   * @param nodelist the nodelist.
   */
  play.nodelistToXMLLiteral = function(nodelist) {
    var str = '';
    for (var i = 0; i < nodelist.length; i++) {
      var n = nodelist[i];
      str += n.outerHTML || n.nodeValue;
    }
    return str;
  };

  // initialize RDFa Play
  play.init();
})(jQuery);


// ----------------------


/**
 * The RDFa play visualizer is used to visualize RDF graphs.
 *
 * @author Manu Sporny <msporny@digitalbazaar.com>
 */
(function($) {
  // create the play instance if it doesn't already exist
  window.play.viz = window.play.viz || {};
  var viz = window.play.viz;

  // setup the visualization viewport
  var m = [20, 120, 20, 120],
    w = 1024 - m[1] - m[3],
    h = 450 - m[0] - m[2],
    i = 0,
    root;

  /**
   * Redraw the graph visualization on the screen.
   */
  viz.redraw = function(nodes) {
    // delete any old SVG document
    $('#graph').empty();

    // create a new tree layout
    viz.tree = d3.layout.tree()
      .size([h, w])
      .separation(function(a, b) {
        var descendants = function(node) {
          var count = 0;
          for (d in node.children) {
            count++;
            count += descendants(node.children[d]);
          }
          return count;
        };
        var aDesc = Math.max(descendants(a), a.parent == b.parent ? 1 : 2);
        var bDesc = Math.max(descendants(b), a.parent == b.parent ? 1 : 2);
        return (aDesc + bDesc) / 2;
      });

    // create the projection
    viz.diagonal = d3.svg.diagonal()
      .projection(function(d) {
        return [d.y, d.x];
      });

    // create the view for the graph
    viz.view = d3.select("#graph").append("svg:svg")
      .attr("width", w + m[1] + m[3])
      .attr("height", h + m[0] + m[2])
      .append("svg:g")
      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    // set the root value
    root = nodes;

    // if root is invalid, fix it
    if (root == undefined) {
      root = {
        'name': 'Web Page'
      };
    }

    // set the RDF data
    viz.tree.nodes(root);

    // set the root X and Y starting location? I don't really know what this does.
    root.x0 = h / 2;
    root.y0 = 0;

    // update the visualization
    viz.update(root);
  };

  viz.update = function(source) {
    var duration = d3.event && d3.event.altKey ? 5000 : 500;

    // Compute the new tree layout.
    var nodes = viz.tree.nodes(root).reverse();

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // Update the nodes…
    var node = viz.view.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on("click", function(d) {
        viz.toggle(d);
        viz.update(d);
      });

    nodeEnter.append("svg:circle")
      .attr("r", 1e-6)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    nodeEnter.append("svg:text")
      .attr("x", function(d) {
        return d.children || d._children ? -10 : 10;
      })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
        return d.name;
      })
      .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    nodeUpdate.select("text")
      .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    nodeExit.select("circle")
      .attr("r", 1e-6);

    nodeExit.select("text")
      .style("fill-opacity", 1e-6);

    // Update the links…
    var link = viz.view.selectAll("path.link")
      .data(viz.tree.links(nodes), function(d) {
        return d.target.id;
      });

    // Enter any new links at the parent's previous position.
    link.enter().insert("svg:path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {
          x: source.x0,
          y: source.y0
        };
        return viz.diagonal({
          source: o,
          target: o
        });
      })
      .transition()
      .duration(duration)
      .attr("d", viz.diagonal);

    // Transition links to their new position.
    link.transition()
      .duration(duration)
      .attr("d", viz.diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {
          x: source.x,
          y: source.y
        };
        return viz.diagonal({
          source: o,
          target: o
        });
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  };

  // Toggle children.
  viz.toggle = function(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }

  viz.redraw();

})(jQuery);
