#!/usr/bin/node

function firstThree (array) {
  return array.filter((el, index) => index < 3);
}

module.exports = firstThree;
