const Pact = require('../1-executor_function.js');
const { assert } = require('chai');

describe('Pact', function () {
  describe('executor function', () => {
    it('should pass two functions', async () => {
      let fn1;
      let fn2;
      new Pact((_fn1, _fn2) => {
        fn1 = _fn1;
        fn2 = _fn2;
      });
      assert.equal(typeof fn1, 'function');
      assert.equal(typeof fn2, 'function');
    });
  });

  describe('then/catch', () => {
    it('should return an object with a then function', async () => {
      assert.equal(typeof (new Pact(() => { })).then, 'function');
    });

    it('should return an object with a catch function', async () => {
      assert.equal(typeof (new Pact(() => { })).catch, 'function');
    });
  });
});
