#!/usr/bin/node

function sortStringsDown (array) {
  array.sort((a, b) => b.localeCompare(a));
}

module.exports = sortStringsDown;
