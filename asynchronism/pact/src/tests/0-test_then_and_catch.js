const Pact = require('../0-then_and_catch');
const { assert } = require('chai');

describe('Pact', function () {
  it('should return an object with a then function', async () => {
    assert.equal(typeof (new Pact(() => {})).then, 'function');
  });

  it('should return an object with a catch function', async () => {
    assert.equal(typeof (new Pact(() => {})).catch, 'function');
  });
});
