// assertEqual Test
// required chai

const assert = require('chai').assert;

const tail = require('../tail2');
const head = require('../head2');
const findKeyByValue = require('../findKeyByValue2');
const findKeys = require('../findKeys2');
const eqObjects = require('../eqObjects2');
const countOnly = require('../countOnly2');

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

// testing findKeyByValue function
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it('returns "drama" for (bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});

// testing findKeys function
describe("#findKeys", () => {
  const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
  it('returns "Akaleri" for obj', () => {
    assert.strictEqual(findKeys(obj, x => x.stars === 3), "Akaleri");
  });
});

// testing eqObjects function
describe("#eqObjects", () => {
  let arrayObject2 = { c: "1", d: ["2", 3] };
  let arrayObject = { c: "1", d: ["2", 3, 4, 5] };
  it('returns "false" for (arrayObject2, arrayObject)', () => {
    assert.strictEqual(eqObjects(arrayObject2, arrayObject), false);
  });
});
