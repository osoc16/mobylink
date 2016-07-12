const fs = require('fs');
const got = require('got');

const url = 'http://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';

const base = 'https://osoc16.github.io/mobylink/parking/terms/';

const outputFile = "_data/parking.json";

let graph = [];
let context = {
  "lastModifiedDate": "https://schema.org/dateModified",
  "name": "http://schema.org/name",
  "description": "http://schema.org/description",
  "latitude": "http://schema.org/latitude",
  "longitude": "http://schema.org/longitude",
  // "address": "https://schema.org/streetAddress", //todo: split up to actual address, not both
  // "contactInfo": "https://pending.schema.org/servicePhone", //todo: split up phone
  "address": "https://schema.org/adress",
  "contactInfo": "https://schema.org/text",
  // "city": {
  //   "id": 1004,
  //   "name": "https://schema.org/name"
  // },
  // "parkingServer": {
  //   "id": 1005,
  //   "name": "https://schema.org/name"
  // },
  // "suggestedFreeThreshold": 5, // temporarily deleted
  // "suggestedFullThreshold": 5, // temporarily deleted
  // "capacityRounding": 1, // temporarily deleted
  "openingTimes": "http://schema.org/openingHours",
  // "openingTimes": [{
  //   "days": ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
  //   "from": "00:00",
  //   "to": "23:59"
  // }],
  "parkingStatus": "http://vocab.datex.org/terms#parkingStatusPublication", // not sure
  "availableCapacity": "http://vocab.datex.org/terms#parkingNumberOfVacantSpaces",
  "totalCapacity": "http://vocab.datex.org/terms#totalCapacity",
  "openingStatus": "http://vocab.datex.org/terms#parkingSiteOpeningStatus",
  "suggestedCapacity": "http://vocab.datex.org/terms#ParkingStatusValidity",
  "activeRoute": "http://vocab.datex.org/terms#parkingRoute",
  // },
  // "@id": "https://osoc16.github.io/mobylink/parking/#18417"
};


let jsonld = {};

got(url).then(response => {
  let data = JSON.parse(response.body);

  for (let space of data) {

    // make the id into a url
    space['@id'] = `${base}#${space.id}`;
    delete space.id;

    // make the parkingstatus conform
    if (space.parkingStatus.open) {
      space.parkingStatus.openingStatus = 'open';
    } else {
      space.parkingStatus.openingStatus = 'closed';
    }
    delete space.parkingStatus.open;

    // delete what isn't parseable
    delete space.suggestedFreeThreshold;
    delete space.suggestedFullThreshold;
    delete space.capacityRounding;

    // fix the time
    space.parkingStatus.lastModifiedDate = new Date(space.parkingStatus.lastModifiedDate).toISOString()

    // set the type
    // space['@type'] = '';

    graph.push(space);
  };

  jsonld = {
    // '@context': base+contextFile,
    '@context': context,
    '@graph': graph
  };

  fs.writeFile(outputFile, JSON.stringify(jsonld), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The data was saved!");
  });
});
