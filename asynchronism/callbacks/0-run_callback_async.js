#!/usr/bin/node

/**
  * Runs a callback function asynchronously
  * @param {function} callbackFunction
  */
function runCallback (callbackFunction) {
  setTimeout(() => {
    callbackFunction();
  }, 1000);
}

module.exports = runCallback;
