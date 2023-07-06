const { assert } = require('chai');
const sortStringsDown = require('../3-sort_strings_descending');

describe('sortStringsDown', () => {
  it('should mantain sort order for sorted strings', () => {
    const actual = ['c', 'b', 'a'];
    sortStringsDown(actual);
    const expected = ['c', 'b', 'a'];
    console.log({ actual, expected });
    assert.sameOrderedMembers(actual, expected);
  });

  it('should fix sort order for unsorted strings', () => {
    const actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
    sortStringsDown(actual);
    const expected = ['oranges', 'limes', 'lemons', 'berries', 'apples'];
    console.log({ actual, expected });
    assert.sameOrderedMembers(actual, expected);
  });
});
