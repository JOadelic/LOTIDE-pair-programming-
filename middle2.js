// refactored middle function &
// required eqArrays function and assertArraysEqual function with Maria - Jordan is driver

const eqArrays = require('./eqArrays2');
const assertArraysEqual = require('./assertArraysEqual2');

const middle = function(array) {
  let center = [];
  let length = array.length;
  

  if (length < 3) {
    return center;
  } else if (length % 2 !== 0) {
    center.push(array[Math.floor(array.length / 2)]);
    return center;
  } else if (length % 2 === 0) {
    center.push(array[Math.floor((array.length - 1) / 2)]);
    center.push(array[Math.floor(array.length / 2)]);
    return center;
  }
}

module.exports = middle;



// console.log(middle([1, 2, 3, 5, 6])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]