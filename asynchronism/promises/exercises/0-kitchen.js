#!/usr/bin/node

const foodPromise = new Promise((resolve, reject) => {
  // simulating the asynchronous operation of making food
  setTimeout(() => {
    resolve();
  }, 2000);
});

function makeFood (food) {
  return foodPromise;
}

module.exports = makeFood;
