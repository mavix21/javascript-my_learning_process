#!/usr/bin/node

function sortDown (array) {
  array.sort((a, b) => b - a);
}

module.exports = sortDown;
