const { assert } = require('chai');
const sortUp = require('../1-sort_numbers_descending');

describe('sortDown', () => {
  it('should mantain sort order for sorted elements', () => {
    const actual = [15, 10, 5];
    sortUp(actual);
    const expected = [15, 10, 5];
    assert.sameOrderedMembers(actual, expected);
  });

  it('should fix sort order for unsorted elements', () => {
    const actual = [7, 4, 2, 3, 0, 5];
    sortUp(actual);
    const expected = [7, 5, 4, 3, 2, 0];
    assert.sameOrderedMembers(actual, expected);
  });
});
