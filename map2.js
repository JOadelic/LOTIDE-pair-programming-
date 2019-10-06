const eqArrays = require('./eqArrays2');
const assertArraysEqual = require('./assertArraysEqual2');

const map = function(array, callback) {
  const results = [];
  for (let item of array) { 
    results.push(callback(item));

  }
  return results;
}

module.exports = map;