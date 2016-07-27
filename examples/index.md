---
layout: example
title: Examples
home: true
---

To help you with the adoption of Datex as a vocabulary, we've compiled some

{% for example in site.examples %}
* [{{example.title}}]({{example.id}})
{% endfor %}

## Contributing

If you can contribute to this list, open a pull request on [GitHub](https://github.com/osoc16/mobylink) to add a `markdown` file to the `_examples` folder.
