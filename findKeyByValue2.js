const assertEqual = require('./assertEqual2');

//returns key with given value;
const findKeyByValue = function(object, value) {
  let outputKeys = Object.keys(object);
  
  for (let key of outputKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;