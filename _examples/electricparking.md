---
layout: example
title: Electric charging parking
typeof: ElectricCharging
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
    property: chargingStationConnectorType
    description: chargingStationConnectorType
  -
    property: chargingStationModelType
    description: chargingStationModelType
  -
    property: chargingStationUsageType
    description:  chargingStationUsageType
  -
    property: numberOfChargingPoints
    description:  numberOfChargingPoints
  -
    property: publicationTime
    description:  Publication time
---

This describes a parkingsite.

RDFa example:

```html
<div prefix="dtx: http://vocab.datex.org/terms#" resource="www.parkingsiteX.org" typeof="dtx:parkingSite">
  <h2 property="dtx:parkingName">Parking name</h2>
  <p property="dtx:parkingSiteAddress">Parking address</p>
  <p property="dtx:parkingLocation">Parking city</p>
  <div resource="www.parkingsiteX.org/electriccarparking" typeof= "dtx:electricCharging" property="dtx:electricCharging">
        <p property="dtx:chargingStationConnectorType" > SAE J1772 </p>
        <p property="dtx:chargingStationModelType" >?</p>
        <p property="dtx:chargingStationUsageType" >?</p>
        <p property="dtx:numberOfChargingPoints" >2</p>
    </div>
  <p property="dtx:publicationTime">07/27/2016</p>
</div>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@graph": [
      {
        "@id": "www.parkingsiteX.org",
        "@type": "dtx:ParkingSite",
        "dtx:parkingName": "Parking name",
        "dtx:parkingSiteAddress": "Parking address",
        "dtx:publicationTime": "2016-07-27T17:44:07+03:00"

      },
      {
        "@id": "www.parkingsiteX.org/electriccarparking",
        "@type": "dtx:electricCharging",
        "dtx:chargingStationConnectorType": "?",
        "dtx:chargingStationModelType": "?",
        "dtx:chargingStationUsageType": "?",
        "dtx:numberOfChargingPoints": 2
      }
    ]
}
```
