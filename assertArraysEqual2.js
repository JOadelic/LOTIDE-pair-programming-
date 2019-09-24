// Refactoring assertArraysEqual function with Jordan - Maria driver

const eqArrays = require('./eqArrays2');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
