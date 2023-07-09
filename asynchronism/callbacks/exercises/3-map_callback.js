#!/usr/bin/node

function map (arr, callback) {
  const newArr = [];

  for (const el of arr) {
    newArr.push(callback(el));
  }

  return newArr;
}

module.exports = map;
