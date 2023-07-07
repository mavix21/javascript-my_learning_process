#!/usr/bin/node

function lessThanFive (array) {
  return array.filter(el => el < 5);
}

module.exports = lessThanFive;
