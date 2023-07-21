# Pact: A Promise Library

Promises should not be scary! Let's prove it by creating our own implementation
of a Promise called `Pact`.

If we take a look at promises on MDN, we can see that the basic idea is to
create a proxy for a value that will be asynchronously resolved. The API looks
like this:

```javascript
var promise = new Promise(function(resolve, reject) {
  // asynchronously resolve a value
  setTimeout(() => {
    resolve(42);
  }, 100);
});

promise.then((value) => {
  console.log(value); // 42
});
```

Promises may look like some crazy magic, but underneath the hood they are just
a convenient API for function callbacks.

## 0. Then and Catch

First task is to create two class methods `catch` and `then`. These methods are
used by promises to wire up callbacks.

### Examples

This is what we are trying to build:

```javascript
const pact = new Pact((resolve, reject) => {
    // some asynchronous code here
});

pact.then(() => {
    // this function will be executed when the resolve functions is called
});

pact.catch(() => {
    // this function will be executed when the reject function is called
});
```

If we call resolve inside the promise executor function:

```javascript
const pact = new Pact((resolve, reject) => {
    resolve(42);
});
```

the `then` function is invoked with `42`:

```javascript
promise.then((val) => {
    console.log(val); // 42
});
```

Similarly, if the `reject` function is invoked the `catch` function will be
invoked with the value passed into `reject`.

### Solution

See the solution [here](https://github.com/mavix21/javascript-my_learning_process/blob/main/asynchronism/pact/src/0-then_and_catch.js)

Run the tests with the following command:

```bash
npx mocha tests/0-test_then_and_catch.js
```

## 1. The executor
