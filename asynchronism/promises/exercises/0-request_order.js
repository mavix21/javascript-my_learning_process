#!/usr/bin/node

const { makeFood } = require('./0-kitchen.js');

class Order {
  constructor () {
    this.isReady = false;
    this.error = '';
  }

  request (food) {
    const promise = makeFood(food);
    promise.then(() => {
      this.isReady = true;
    });

    promise.catch((err) => {
      this.error = err;
    });
  }
}

module.exports = Order;
