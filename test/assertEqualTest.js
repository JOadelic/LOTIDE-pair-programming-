// assertEqual Test

const assertEqual = require('../assertEqual2');
const tail = require('../tail2');
const head = require('../head2');
const eqArrays = require('../eqArrays2');
const assertArraysEqual = require('../assertArraysEqual2');


// testing tail function with Jordan - Maria driver
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


// testing head function with Maria - Jordan driver
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// testing eqArrays function with Maria - Jordan driver
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 


// testing assertArraysEqual function with Jordan - Maria driver
assertArraysEqual([1, 2, 3,], [1, 2, 3]);
assertArraysEqual([1, 2, 3,], [3, 2, 1]);