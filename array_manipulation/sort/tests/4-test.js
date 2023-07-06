#!/usr/bin/node

const { assert } = require('chai');
const sortStudents = require('../4-sort_students.js');

describe('sortStudents', () => {
  it('should sort graduated students to the top', () => {
    const actual = [
      { id: 1, graduated: false, grade: 100 },
      { id: 2, graduated: true, grade: 90 }
    ];
    sortStudents(actual);
    const expected = [
      { id: 2, graduated: true, grade: 90 },
      { id: 1, graduated: false, grade: 100 }
    ];
    console.log({ actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should sort by grade after sorting by graduated', () => {
    const actual = [
      { id: 1, graduated: false, grade: 90 },
      { id: 2, graduated: true, grade: 90 },
      { id: 3, graduated: true, grade: 95 },
      { id: 4, graduated: false, grade: 87 },
      { id: 5, graduated: true, grade: 70 },
      { id: 6, graduated: false, grade: 88 },
      { id: 7, graduated: true, grade: 85 }
    ];
    sortStudents(actual);
    const expected = [
      { id: 3, graduated: true, grade: 95 },
      { id: 2, graduated: true, grade: 90 },
      { id: 7, graduated: true, grade: 85 },
      { id: 5, graduated: true, grade: 70 },
      { id: 1, graduated: false, grade: 90 },
      { id: 6, graduated: false, grade: 88 },
      { id: 4, graduated: false, grade: 87 }
    ];
    console.log({ actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });
});
