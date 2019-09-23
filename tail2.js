// Refactoring Tail function with Jordan - Maria driver

const assertEqual = require('./assertEqual2');

const tail = function(arr) {
  arr.splice(0, 1);
  return arr;
};

module.exports = tail;
