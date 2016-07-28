---
layout: example
title: Road
typeof: Road
properties:
  -
    property: roadIdentifier
    description: The number of the road of which the linear element forms a part
  -
    property: roadName
    description: Name of the road of which the linear element forms a part.
  -
    property: roadDestination
    description: The address of the parkingsite
  -
    property: roadOrigination
    description: The city of the parkingsite
  -
    property: roadSurfaceTemperature
    description: The telephonenumber of the parkingsite
  -
    property: distanceToThisRoad
    description: The distance to the road (from the calling component/object)
  -
    property: roadDirection
    description: Name of some city, area, compass direction or other identification the road is leading to (to determine the direction in question)
  -
    property: typeOfRoad
    description: Type of the road
---

This describes a road.

RDFa example:

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#road" typeof="dtx:Road" id="road">
  <h2 property="dtx:roadIdentifier">E403</h2>
  <p property="dtx:roadName">Road name</p>
  <p property="dtx:roadDestination">Road destination</p>
  <p property="dtx:roadOrigination">Road origination</p>
  <p property="dtx:roadSurfaceTemperature">Road surface temperature</p>
  <p property="dtx:distanceToThisRoad">20</p>
  <p property="dtx:roadDirection">France</p>
  <p property="dtx:typeOfRoad">mainRoad</p>
</article>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@type": "dtx:Road",
  "dtx:roadIdentifier": "E403",
  "dtx:roadName": "Parking address",
  "dtx:roadDestination": "Road destination",
  "dtx:roadOrigination": "Road origination",
  "dtx:roadSurfaceTemperature": "Road surface temperature",
  "dtx:distanceToThisRoad": 20,
  "dtx:roadDirection": "France",
  "dtx:typeOfRoad": "mainRoad"
}
```
