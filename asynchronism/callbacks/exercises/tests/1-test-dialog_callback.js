#!/usr/bin/node

const Dialog = require('../1-dialog_callback.js');
const { assert } = require('chai');

describe('Dialog', () => {
  it('should allow registering of multiple callbacks', () => {
    const dialog = new Dialog();
    let calledA = 0;
    let calledB = 0;
    let calledC = 0;
    dialog.onClose(() => {
      calledA++;
    });

    dialog.onClose(() => {
      calledB++;
    });

    dialog.onClose(() => {
      calledC++;
    });

    dialog.close();
    assert.equal(calledA, 1, 'First Callback was not called once after close');
    assert.equal(calledB, 1, 'Second Callback was not called once after close');
    assert.equal(calledC, 1, 'Third Callback was not called once after close');
  });
});
