# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Maria Fernandez and Jordan Owens as part of our learning at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mariahfernnn/lotide_pair`

**Require it:**

`const _ = require('@username/lotide_pair');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first index of the array
* `tail(array)`: removes the first index and returns the rest of the array
* `middle(array)`: returns the middle value of an array
* `eqArrays(arr1, arr2)`: returns true if they are equal
* `assertArraysEqual(actual, expected)`: compares actual to expected, returns true/false
* `assertEqual(actual, expected)`: compares actual to expected, returns true/false