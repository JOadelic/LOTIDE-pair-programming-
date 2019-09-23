// assertArraysEqual Test
// required chai

const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual2');

const middle = require('../middle2');

// testing middle function with Maria - Jordan is driver
// added describe and it functions with Jordan - Maria driver
describe("#middle", () => {
  it('returns [3] for [1, 2, 3, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 5, 6]), [3]);
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});


