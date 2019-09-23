const assertEqual = require('../assertEqual2');
const head = require('../head2');

// TEST CODE
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(5, 1);
// assertEqual("a", "a");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");