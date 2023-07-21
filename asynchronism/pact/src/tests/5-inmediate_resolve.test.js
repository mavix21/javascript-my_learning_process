const Pact = require('../5-inmediate_resolve.js');
const { assert } = require('chai');

describe('Pact', function () {
  describe('inmediate resolve', () => {
    let pact;
    before(() => {
      pact = new Pact((resolve, reject) => {
        resolve(42);
      });
    });

    it('should run the then callback even after resolving', (done) => {
      pact.then((val) => {
        assert.equal(val, 42);
        done();
      });
    }).timeout(250);
  });

  describe('inmediate catch', () => {
    let pact;
    before(() => {
      pact = new Pact((resolve, reject) => {
        reject(42);
      });
    });

    it('should run the catch callback even after resolution', (done) => {
      pact.catch((val) => {
        assert.equal(val, 42);
        done();
      });
    }).timeout(250);
  });

  describe('asynchronous compatibility (previous task)', () => {
    it('should call a .then function with the resolve value after a timeout', (done) => {
      new Pact((resolve, reject) => {
        setTimeout(() => {
          resolve(42);
        }, 100);
      }).then((resolved) => {
        assert.equal(resolved, 42);
        done();
      });
    });

    it('should call a .then function with the resolve value after a timeout', (done) => {
      new Pact((resolve, reject) => {
        setTimeout(() => {
          reject(42);
        }, 100);
      }).catch((err) => {
        assert.equal(err, 42);
        done();
      });
    });
  });
});
