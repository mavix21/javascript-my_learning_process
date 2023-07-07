const addScore = require('../1-add_score.js');
const { assert } = require('chai');

describe('addScore', () => {
  it('should add 10 to the score for a single participant', () => {
    const initial = [{ id: 1, score: 5 }];
    const actual = addScore(initial);
    const expected = [{ id: 1, score: 15 }];

    console.log({ initial, actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });

  it('should square several elements', () => {
    const initial = [{ id: 1, score: 5 }, { id: 3, score: 10 }, { id: 2, score: 15 }];
    const actual = addScore(initial);
    const expected = [{ id: 1, score: 15 }, { id: 3, score: 20 }, { id: 2, score: 25 }];

    console.log({ initial, actual, expected });
    assert.sameDeepOrderedMembers(actual, expected);
  });
});
