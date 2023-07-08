#!/usr/bin/node

const { assert } = require('chai');
const sortByMonth = require('../5-sort_by_month.js');

describe('sortByMonth', () => {
  it('should fix the sort order for three events', () => {
    const actual = [
      { event: 'dance', month: 'MAR' },
      { event: 'farmers market', month: 'JUN' },
      { event: 'parade', month: 'JAN' }
    ];
    sortByMonth(actual);
    const expected = [
      { event: 'parade', month: 'JAN' },
      { event: 'dance', month: 'MAR' },
      { event: 'farmers market', month: 'JUN' }
    ];
    console.log({ actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should fix the sort order for many events', () => {
    const actual = [
      { event: 'haunted hayride', month: 'OCT' },
      { event: 'holiday party', month: 'DEC' },
      { event: 'picnic', month: 'SEP' },
      { event: 'dance', month: 'MAR' },
      { event: 'snowball fight', month: 'FEB' },
      { event: 'farmers market', month: 'JUN' },
      { event: 'parade', month: 'JAN' }
    ];
    sortByMonth(actual);
    const expected = [
      { event: 'parade', month: 'JAN' },
      { event: 'snowball fight', month: 'FEB' },
      { event: 'dance', month: 'MAR' },
      { event: 'farmers market', month: 'JUN' },
      { event: 'picnic', month: 'SEP' },
      { event: 'haunted hayride', month: 'OCT' },
      { event: 'holiday party', month: 'DEC' }
    ];
    console.log({ actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });
});
