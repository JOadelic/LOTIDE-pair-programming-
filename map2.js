const eqArrays = require('./eqArrays2');
const assertArraysEqual = require('./assertArraysEqual2');

const map = function(array, callback) {
  const results = [];
  for (let item of array) { // loop through the each value in the array
    results.push((item[0]));

  }
  return results;
}

module.exports = map;