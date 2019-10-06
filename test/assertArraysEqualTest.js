// assertArraysEqual Test
// required chai

const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual2');

const middle = require('../middle2');
const map = require('../map2');
const takeUntil = require('../takeUntil2');

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

// testing map function
describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"]), ["g", "c", "t", "m", "t"]);
  });
});

// testing takeUntil function
describe("#takeUntil", () => {
  it('returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
});


