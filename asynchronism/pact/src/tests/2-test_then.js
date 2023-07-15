const Pact = require('../2-then');
const { assert } = require('chai');

describe('Pact', function () {
  it('should call the .then callback', (done) => {
    new Pact((resolve, reject) => {
      setTimeout(resolve, 100);
    }).then((resolved) => {
      assert(true);
      done();
    });
  });

  it('should call the .then callback with the resolved value', (done) => {
    new Pact((resolve, reject) => {
      setTimeout(() => {
        resolve(42);
      }, 100);
    }).then((resolved) => {
      assert.equal(resolved, 42);
      done();
    });
  });
});
