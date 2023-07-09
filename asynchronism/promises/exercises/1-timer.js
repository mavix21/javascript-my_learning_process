#!/usr/bin/node

function timer () {
  const promise = new Promise(function (resolve, reject) {
    resolve('resolve successful');
  });

  promise.then(function (message) {
    console.log(message);
  });

  return promise;
}

module.exports = timer;
