const squaredMap = require('../0-squared_map.js');
const { assert } = require('chai');

describe('squaredMap', () => {
  it('should square a single element', () => {
    assert.sameOrderedMembers(squaredMap([2]), [4]);
  });

  it('should square several elements', () => {
    assert.sameOrderedMembers(squaredMap([2, 3, 4]), [4, 9, 16]);
  });
});
