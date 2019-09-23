// Refactoring tail function with Jordan - Maria driver

const assertEqual = require('../assertEqual2');
const tail = require('../tail2');
const head = require('../head2');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const ingredients = ["cheese"];
tail(ingredients);
assertEqual(ingredients.length, 0);


const list = [];
tail[list];
assertEqual(list.length, 0);


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
