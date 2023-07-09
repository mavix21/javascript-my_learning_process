#!/usr/bin/node

const timer = require('../1-timer.js');
const { assert } = require('chai');

describe('timer', () => {
  const promise = timer();

  it('should return a promise', () => {
    assert.equal(promise instanceof Promise, true);
  });

  it('should resolve', async () => {
    await promise;
    assert(true);
  }).timeout(1000);
});
