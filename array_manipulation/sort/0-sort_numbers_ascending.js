#!/usr/bin/node

function sortUp (array) {
  return (array.sort((a, b) => a - b));
}

module.exports = sortUp;
