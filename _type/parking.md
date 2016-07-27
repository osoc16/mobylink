---
title: parking
properties:
  -
    property: parkingSiteAddress
    description: you use this for ...
  -
    property: parkingName
    description: this is bla bla
---

This is a parking and some text bla bla

You use it like this in RDFa

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#parking" typeof="dtx:ParkingSite" id="parking">
  <h2 property="dtx:parkingName">Pj's awesome parking!</h2>
  <p property="dtx:parkingSiteAddress">Maria-Hendrikaplein 1</p>
  <p property="dtx:parkingLocation">9000 Gent</p>
  <p property="dtx:contactDetailsTelephoneNumber">0498/ 76 43 21</p>
  <p property="dtx:parkingDescription">This is Pj’s awesome parking space!</p>
  <p>spaces: <span property="dtx:parkingSpaceOccupied">2</span>/<span property="dtx:totalCapacity">3</span></p>
</article>
```

And like this in JSON-LD:

```json
{
  "@context": {
    "dtx": "vocab ... terms"
  }
}
```
