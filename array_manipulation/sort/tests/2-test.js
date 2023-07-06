const { assert } = require('chai');
const sortStringsUp = require('../2-sort_strings_ascending');

describe('sortStringsUp', () => {
  it('should mantain sort order for sorted strings', () => {
    const actual = ['a', 'b', 'c'];
    sortStringsUp(actual);
    const expected = ['a', 'b', 'c'];
    console.log({ actual, expected });
    assert.sameOrderedMembers(actual, expected);
  });

  it('should fix sort order for unsorted elements', () => {
    const actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
    sortStringsUp(actual);
    const expected = ['apples', 'berries', 'lemons', 'limes', 'oranges'];
    console.log({ actual, expected });
    assert.sameOrderedMembers(actual, expected);
  });
});
