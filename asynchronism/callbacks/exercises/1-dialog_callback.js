#!/usr/bin/node

class Dialog {
  constructor () {
    this.callbacks = [];
  }

  onClose (callbackFunction) {
    this.callbacks.push(callbackFunction);
  }

  close () {
    for (const fn of this.callbacks) {
      fn();
    };
  }
}

module.exports = Dialog;
