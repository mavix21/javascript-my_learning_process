#!/usr/bin/node

function sortStringsUp (array) {
  array.sort((a, b) => a.localeCompare(b));
}

module.exports = sortStringsUp;
