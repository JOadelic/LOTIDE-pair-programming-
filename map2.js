const eqArrays = require('./eqArrays2');
const assertArraysEqual = require('./assertArraysEqual2');

const map = function(array) {
  const results = [];
  for (let item of array) { 
    results.push((item[0]));

  }
  return results;
}

module.exports = map;