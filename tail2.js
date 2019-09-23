// Refactoring Tail function with Jordan - Maria driver

const assertEqual = require('./assertEqual2');

const tail = function(arr) {
  arr.splice(0, 1);
  return arr;
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// 
// const ingredients = ["cheese"];
// tail(ingredients);
// assertEqual(ingredients.length, 0);
// 
// const list = [];
// tail[list];
// assertEqual(list.length, 0);

module.exports = tail;