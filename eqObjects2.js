const assertEqual = require('./assertEqual2');

const eqObjects = function(object1, object2) {
  let objectOne = Object.keys(object1);
  let objectTwo = Object.keys(object2);

  if (objectOne.length === objectTwo.length) {
    for (let keyName of objectOne) {
      if (Array.isArray(objectOne[keyName])) {
        for (let index in objectOne[keyName]) {
          if (objectOne[keyName][index] !== objectTwo[keyName][index]) {
            return false;
          }
        }
      } else if (object1[keyName] !== object2[keyName]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;