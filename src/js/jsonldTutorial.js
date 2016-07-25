// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var tags = [
  '<span class="tag full">"@context": {<br>  "dtx": "https://vocab.datex.org/terms#"<br>},</span>',
  '<span class="tag full">"@type": "dtx:parkingSite",</span>',
  '<span class="tag">dtx:parkingName</span>',
  '<span class="tag">dtx:parkingSiteAddress</span>',
  '<span class="tag">dtx:parkingLocation</span>',
  '<span class="tag">dtx:latitude</span>',
  '<span class="tag">dtx:longitude</span>',
  '<span class="tag">dtx:contactDetailsTelephoneNumber</span>',
  '<span class="tag">dtx:parkingDescription</span>',
  '<span class="tag">dtx:parkingSpaceOccupied</span>',
  '<span class="tag">dtx:totalCapacity</span>'
];
shuffle(tags);
document.getElementById('drag').innerHTML = tags.join('');

var drake = dragula([document.getElementById('drag'), document.getElementById('json-source')], {
  invalid: function(el, handle) {
    return el.classList.contains('replace');
  }
});

drake.on('drop', function(el, target, source, sibling) {
  if (sibling.classList.contains('replace')) {
    sibling.classList.remove('tag');
    sibling.classList.add('empty');
    sibling.textContent = '';
  };
  // submit the frame
  document.getElementById('json-iframe').src = '//95.85.15.16/parking/?json=' + encodeURIComponent(JSON.stringify(JSON.parse(document.getElementById('json-source').textContent)));
});
