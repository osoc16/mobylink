---
layout: example
title: Accident
typeof: Accident
properties:
  -
    property: accidentType
    description: A characterization of the nature of the accident.
  -
    property: accidentCause
    description: A descriptor indicating the most significant factor causing an accident.
  -
    property: vehicleInvolved
    description: The vehicle involved in the accident.
---

This describes an Accident.

RDFa example:

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#accident" typeof="dtx:Accident" id="accident">
  <h2 property="dtx:accidentType">collision</h2>
  <p property="dtx:accidentCause">rubberNecking</p>
  <p property="dtx:vehicleInvolved">Citroen C3</p>
</article>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@type": "dtx:Accident",
  "dtx:accidentType": "collision",
  "dtx:accidentCause": "rubberNecking",
  "dtx:vehicleInvolved": "Citroen C3"
}
```
