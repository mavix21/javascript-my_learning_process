#!/usr/bin/node

function unique (array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

module.exports = unique;
