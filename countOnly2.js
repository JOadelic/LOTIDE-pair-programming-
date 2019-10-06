const assertEqual = require('./assertEqual2');


const countOnly = function(allItems, itemsToCount) {
  let newObject = {};

  for (let value of allItems) {
    if (itemsToCount[value]) {
      if (newObject.hasOwnProperty(value)) {
        newObject[value]++
      } else {
        newObject[value] = 1;
      }
    }
  } return newObject;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;