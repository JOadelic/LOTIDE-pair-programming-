// refactoring function with Maria - Jordan is driver
const assertEqual = require('./assertEqual2');

let eqArrays = function(array1, array2) {
  // console.log(array1.join());
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
