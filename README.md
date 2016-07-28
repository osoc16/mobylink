# Moby Link ([vocab.datex.org](http://vocab.datex.org))

This is the intro page to using datex as a vocabulary for linked mobility data. Created by [Haroen Viaene](https://haroen.me), [Pieter-Jan Gheeroms](https://pieterjangeeroms.me) and [Lisa Debontridder](http://lisadebontridder.be) during [open Summer of code 2016](http://2016.summerofcode.be).

There's a list of [/tools](http://vocab.datex.org/tools) to use while linking data and a vocabulary at [/terms](http://vocab.datex.org/terms#). If there are issues with the vocabulary, open a pull request for [_data/vocabulary.json](_data/vocabulary.json). This is generated from a private (sorry, send your complaints to `datex.eu`) `xsd`.

You can find a [screenshot](img/screenshot.png) of the status after open Summer of code in case some part changes.

# Contributing

You can contribute to the example usages ([/examples](http://vocab.datex.org/examples)) quite smoothly:

0. Fork this repository and create a new branch
1. create a new file in `_examples`
2. give it a relevant name and end it in `.md` (e.g. `parking.md`)
3. add the frontmatter like the other files in the beginning of the file, e.g.:

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
        ---

4. Describe your use case in markdown
5. Put a example in RDFa and JSON-ld between code fences, e.g.:

        RDFa example:

        ```html
        <article prefix="dtx: http://vocab.datex.org/terms#" resource="#parking" typeof="dtx:ParkingSite" id="parking">
          <h2 property="dtx:parkingName">Parking name</h2>
          <p property="dtx:parkingSiteAddress">Parking address</p>
          <p property="dtx:parkingLocation">Parking city</p>
          <p property="dtx:contactDetailsTelephoneNumber">0498/ 76 54 32</p>
          <p property="dtx:parkingDescription">Parking description</p>
          <p>spaces: <span property="dtx:parkingSpaceOccupied">2</span>/<span property="dtx:totalCapacity">3</span></p>
          <p>Locaton: <span property="dtx:latitude">51</span>:<span property="dtx:longitude">3</span>
        </article>
        ```

        JSON-LD example:

        ```json
        {
          "@context": {
            "dtx": "http://vocab.datex.org/terms#"
          },
          "@type": "dtx:ParkingSite",
          "dtx:parkingName": "Parking name",
          "dtx:parkingSiteAddress": "Parking address",
          "dtx:parkingLocation": "Parking city",
          "dtx:contactDetailsTelephoneNumber": "0498/ 76 54 32",
          "dtx:parkingDescription": "Parking description",
          "dtx:parkingSpaceOccupied": 2,
          "dtx:totalCapacity": 3,
          "dtx:latitude": 51,
          "dtx:longitude": 3
        }
        ```

6. Open a pull request to this repository

# License

MIT
