---
layout: example
title: Parking
typeof: ParkingSite
properties:
  -
    property: parkingName
    description: The name of the parkingsite
  -
    property: parkingSiteAddress
    description: The address of the parkingsite
  -
    property: parkingLocation
    description: The city of the parkingsite
  -
    property: contactDetailsTelephoneNumber
    description: The telephonenumber of the parkingsite
  -
    property: parkingDescription
    description: The description of the parkingsite
  -
    property: parkingSpaceOccupied
    description: The amount of parking spaces occupied.
  -
    property: totalCapacity
    description: The maximum amount of spaces available.
  -
    property: latitude
    description: Geolocation Latitude
  -
    property: longitude
    description:  Geolocation Longitude
  -
      property: publicationTime
      description:  Publication time
---

This describes a parkingsite.

RDFa example:

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#parking" typeof="dtx:ParkingSite" id="parking">
  <h2 property="dtx:parkingName">Parking name</h2>
  <p property="dtx:parkingSiteAddress">Parking address</p>
  <p property="dtx:parkingLocation">Parking city</p>
  <p property="dtx:contactDetailsTelephoneNumber" content="0032497466234">0497 / 46 62 34</p>
  <p property="dtx:parkingDescription">Parking description</p>
  <p>spaces: <span property="dtx:parkingSpaceOccupied">2</span>/<span property="dtx:totalCapacity">3</span></p>
  <p>Locaton: <span property="dtx:latitude">51</span>:<span property="dtx:longitude">3</span>
  <p property="dtx:publicationTime">07/27/2016</p>
</article>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@type": "dtx:ParkingSite",
  "@id": "#parking",
  "dtx:parkingName": "Parking name",
  "dtx:parkingSiteAddress": "Parking address",
  "dtx:parkingLocation": "Parking city",
  "dtx:contactDetailsTelephoneNumber": "0032497466234",
  "dtx:parkingDescription": "Parking description",
  "dtx:parkingSpaceOccupied": 2,
  "dtx:totalCapacity": 3,
  "dtx:latitude": 51,
  "dtx:longitude": 3,
  "dtx:publicationTime": "2016-07-27T17:44:07+03:00"
}
```
