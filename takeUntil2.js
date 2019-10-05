// pair programmed with Maria...Jordan's code

const eqArrays = require('./eqArrays2');
const asssertArraysEqual = require('./assertArraysEqual2');

const takeUntil = function(array, callback) {
  let finalArray = [];
  for (let item of array) {
    if (callback(item)) {
      return finalArray;
    } else {
      finalArray.push(item);
    }
  } return finalArray;
};

module.exports = takeUntil;