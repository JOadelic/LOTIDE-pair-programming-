const assertEqual = require('./assertEqual2');

const findKeys = function(object, callback) {
  
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } return undefined;
};

module.exports = findKeys;