#!/usr/bin/node

function createCounter () {
  let counter = 0;

  function incrementCounter () {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

const counter = createCounter();
counter();
counter();
counter();
counter();
