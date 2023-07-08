#!/usr/bin/node

function shortStrings (array) {
  return array.filter(str => str.length <= 3);
}

module.exports = shortStrings;
