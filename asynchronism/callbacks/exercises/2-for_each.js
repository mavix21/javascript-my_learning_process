#!/usr/bin/node

function forEach (arr, callback) {
  let i = 0;
  for (const num of arr) {
    callback(num, i);
    i++;
  }
}

module.exports = forEach;
