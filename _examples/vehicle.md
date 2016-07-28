---
layout: example
title: Vehicle
typeof: Vehicle
properties:
  -
    property: vehicleColour
    description: The color of the vehicle
  -
    property: vehicleCountryOfOrigin
    description: The origin of the vehicle
  -
    property: vehicleIdentifier
    description: Identifier of the vehicle
  -
    property: vehicleManufacturer
    description: The manufacturer of the vehicle
  -
    property: vehicleModel
    description: The model of the vehicle
  -
    property: vehicleRegistrationPlateIdentifier
    description: The registration plate
  -
    property: vehicleStatus
    description: Status of the vehicle
  -
    property: vehicleCharacteristics
    description: The characteristics of the vehicle
  -
    property: axleSpacingOnVehicle
    description: The axle spacing on the vehicle
  -
    property: specificAxleWeight
    description: The axle weight on the vehicle
  -
    property: hazardousGoodsAssociatedWithVehicle
    description: Incase the vehicle is associated with hazardous goods
---

This describes a Vehicle.

RDFa example:

```html
<article prefix="dtx: http://vocab.datex.org/terms#" resource="#vehicle" typeof="dtx:Vehicle" id="vehicle">
  <h2 property="dtx:vehicleColour">red</h2>
  <p property="dtx:vehicleCountryOfOrigin">Belgium</p>
  <p property="dtx:vehicleIdentifier">1HGBH41JXMN109186</p>
  <p property="dtx:vehicleManufacturer">Audi</p>
  <p property="dtx:vehicleModel">2017 R8</p>
  <p property="dtx:vehicleRegistrationPlateIdentifier">1-ABC-123</p>
  <p property="dtx:vehicleStatus" content="onFire">🔥</p>
  <p property="dtx:vehicleCharacteristics">Has a "tuning is not a crime" sticker</p>
  <p property="dtx:axleSpacingOnVehicle">2.0</p>
  <p property="dtx:specificAxleWeight">1.2</p>
</article>
```

JSON-LD example:

```json
{
  "@context": {
    "dtx": "http://vocab.datex.org/terms#"
  },
  "@type": "dtx:Vehicle",
  "@id": "#vehicle",
  "dtx:vehicleColour": "red",
  "dtx:vehicleCountryOfOrigin": "Belgium",
  "dtx:vehicleIdentifier": "1HGBH41JXMN109186",
  "dtx:vehicleManufacturer": "Audi",
  "dtx:vehicleModel": "2017 R8",
  "dtx:vehicleRegistrationPlateIdentifier": "1-ABC-123",
  "dtx:vehicleStatus": "onFire",
  "dtx:vehicleCharacteristics": "Has a tuning is not a crime sticker",
  "dtx:axleSpacingOnVehicle": "2.0",
  "dtx:specificAxleWeight": "1.2"
}
```
