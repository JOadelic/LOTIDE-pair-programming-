// assertEqual Test
// required chai

const assert = require('chai').assert;

const tail = require('../tail2');
const head = require('../head2');

// testing tail function with Jordan - Maria driver
// added describe function with Maria - Jordan is driver
describe("#tail", () => {
  it('returns "Lighthouse", "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [] for ["cheese"]', () => {
    assert.deepEqual(tail(["cheese"]), []);
  });
});

// testing head function with Maria - Jordan driver
// added describe and it functions with Jordan - Maria driver
describe("#head", () => {
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
