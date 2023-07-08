#!/usr/bin/node

const runCallback = require('../0-run_callback_async.js');
const { assert } = require('chai');

describe('Run Callback Async', () => {
  it('should not run a function inmediately', () => {
    let called = false;
    runCallback(() => {
      called = true;
    });
    assert(!called, 'Callback was called inmediately');
  });

  it('should not run a function before 500 milliseconds', (done) => {
    let called = false;
    runCallback(() => {
      called = true;
    });
    setTimeout(() => {
      assert(!called, 'Callback was called before 500 milliseconds');
      done();
    }, 500);
  });

  it('should run a function before 1500 milliseconds', (done) => {
    let called = false;
    runCallback(() => {
      called = true;
    });
    setTimeout(() => {
      assert(called, 'Callback was not called before 1500 milliseconds');
      done();
    }, 1500);
  });
});
