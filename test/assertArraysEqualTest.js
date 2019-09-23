// assertArraysEqual Test

const assertArraysEqual = require('../assertArraysEqual2');

const middle = require('../middle2');

// testing middle function with Maria - Jordan is driver
assertArraysEqual(middle([1, 2, 3, 5, 6]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]