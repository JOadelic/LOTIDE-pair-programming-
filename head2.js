//refactored with Maria -- Jordan is driver

const assertEqual = require('./assertEqual2');

let head = function(array) {
  let firstElement;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      firstElement = array[0];
      return firstElement;
    }
  } else {
    return undefined;
  }
};

module.exports = head;

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");