const fs = require('fs');
const got = require('got');
const xml2js = require('xml2js');
const parse = require('datex2-linker-api');

const outputFile = "_data/verkeercentrum.json";

parse('http://www.verkeerscentrum.be/uitwisseling/datex2full', 'https://osoc16.github.io/mobylink/verkeerscentrum/terms/').then(result => {

  fs.writeFile(outputFile, JSON.stringify(result), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The data was saved!");
  });
}).catch(err => {
  console.warn(err)
});
