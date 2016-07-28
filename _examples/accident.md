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
    description: The <a href="http://vocab.datex.org/terms#Vehicle">Vehicle</a> involved in the accident.
---

This describes an Accident.

RDFa example:

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#accident" typeof="dtx:Accident" id="accident">
  <h2 property="dtx:accidentType">collision</h2>
  <p property="dtx:accidentCause">rubberNecking</p>
  <ul property="dtx:vehicleInvolved" resource="#someInvolvedVehicle" typeof="dtx:Vehicle" id="someInvolvedVehicle">
    <li property="dtx:vehicleModel">Citroën C3</li>
  </ul>
</article>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@type": "dtx:Accident",
  "@id": "#accident",
  "dtx:accidentType": "collision",
  "dtx:accidentCause": "rubberNecking",
  "dtx:vehicleInvolved": {
    "@type": "dtx:Vehicle",
    "dtx:vehicleModel": "Citroën C3"
  }
}
```
