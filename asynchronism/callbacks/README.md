# Callbacks

## Callback Functions

In JavaScript, functions can be `stored`, `returned` and `passed as arguments`
like any other object.

I's useful to pass functions as arguments when you need them to be called at a
specific time that the function caller doesn't (or shouldn't) have direct
access to.

> For example, an animation library might give you the ability to pass in a
`callback function` when the animation is complete. Instead of editing the
animation library directly (which may break it) the author gives you this
ability to run a function at a specific point in time.

Callbacks are also commonly associated with `asynchronous programming` since
they allow you to pick up executing code at some future point in time.
Asynchronous programming will wait for something else to happen before running.
Common asynchronous situations include waiting for user feedback, waiting on a
server response or waiting for an animation to complete.

### Running a Callback Function

In JavaScript, functions are `first-class objects`. This means, just like
objects, functions can be stored in variables, returned from functions, and
passed into other functions as arguments.

With callback functions, we will be passing functions into other functions to
be called at a very specific time.

```javascript
function simpleFunction(fn) {
    // invoke callback function
    fn();
}

simpleFunction(function callbackFunction() {
    console.log('hi');
}); // hi
```

In the aboke example, `callbackFunction` is passed to `simpleFunction` as an
argument and then invoked inmediately. The result is that 'hi' is logged once
to the console.

### Asynchronous Callback

We discussed how callbacks are run at a `specific time` when they are passed to
another function. Typically, this makes them extremely useful for asynchronous
programming.

For web-applications, where JavaScript is especially prevalent, asynchronous
callbacks can be helpful in several scenarios:

- AJAX requests to the server
- Waiting for a user response
- Animations

A simple example for asynchronous code is to use the web API `setTimeout` which
will run code after a set amount of time:

```javascript
setTimeout(function callback () {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback)
```

In `setTimeout`, we give it a callback to run after a period of time (in ms).
The first argument to the function is the callback and the second argument is
the number of milliseconds to wait before running the callback function.

## Excercises

### 0. Make Run Callback Asynchronous

Modify `runCallback` to make `callbackFunction` run asynchronously. Use
`setTimeout` and invoke `callbackFunction` 1000 milliseconds (1 second) after
`runCallback` has been called.

### 1. Dialog Callback

We will create a callback that will be invoked by user interaction. Compare
this usage to the previous exercise where our callback was fired once an alotted
amount of time had passed.

Imagine we have a basic dialog component for our web application. This `Dialog`
component will use the JavaScript `class`, so we can create a new instance of
the dialog whenever we need one.
