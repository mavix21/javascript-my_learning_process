const Pact = require('../6-chaining-callbacks.js');
const { assert } = require('chai');

describe('Pact', function () {
  it('should return a chainable value after .then', () => {
    const pact = new Pact((resolve, reject) => {
      setTimeout(() => {
        resolve(42);
      }, 100);
    }).then((val) => {
      assert.equal(val, 42);
    });

    assert(pact, 'Expected .then to return a chainable pact!');
    assert.equal(typeof pact.then, 'function', 'Expected .then to return a chainable pact!');
  });

  it('should handle value transformation', (done) => {
    const pact = new Pact((resolve, reject) => {
      setTimeout(() => {
        resolve(42);
      }, 100);
    }).then((val) => {
      assert.equal(val, 42);
      return val * 2;
    }).then((val) => {
      assert.equal(val, 84);
      return val * 2;
    });

    pact.then((val) => {
      assert.equal(val, 168);
      done();
    });
  });
});
