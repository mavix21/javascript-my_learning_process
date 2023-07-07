#!/usr/bin/node

/**
  * Given a number n, square it.
  *
  * @param {number} n
  * @return {number} n squared
  */
function squared (n) {
  return n ** 2;
}

/**
  * Given an array, return an array with each element squared.
  *
  * @param {array} arr
  * @return {array} arr squared
  */
function squaredMap (arr) {
  return arr.map(squared);
}

module.exports = squaredMap;
