# Promises

## Introduction

Quite ofter when we're writing JavaScript code we need to wait for something to
happen before continuing. Some examples are:

- Waiting for a user's input
- Waiting for an animation to finish
- Waiting for some time to elapse
- Waiting for a server response

In all of these case we write `asynchronous code`. We tell JavaScript where to
pick up after something has occurred. We can do this by passing a `callback
function` as an argument to a function.

```javascript
runAnimation(function () {
    // do something after the animation is complete
});
```

Promises give us an alternate way to configure our callback functions:

```javascript
const animationPromise = runAnimation();

animationPromise.then(() => {
    // do something after the animation is complete
})
```

Promises allow us to wire up callbacks in a different way. We can even return
promises from functions.

## Single Threaded

JavaScript is `single threaded`. This means that only one process is run at any
given time. If you had loop that continued to run for 10 seconds, the JavaScript
engine `could do nothing other than run the loop` until 10 seconds have expired.

This is why it's important to write our JavaScript code to be `non-blocking`.
This means that if the code needs to wait on something else, it tells JavaScript
where to return to once that is complete. This might mean waiting on user input
, and animation, a timeout or a server response. During this time the engine is
freed up to do whatever else it needs to do.

This is why asynchronous programming is so important in JavaScript. Especially
in the browser, it's very common to write code that waits for something to
happen before continuing:

- When a user clicks this button, do this
- When an animation is finished, do this
- When a server responds with this information, do this

All of these would be asynchronous actions. The `do this` part would be picked
up by the engine once the first part has finished and the thread is freed up to
execute the code.

### Callback Function Arguments

Providing a callback function as an argument is a great way to handle
asynchronous code. The `readFile` function in the Node.js `fs` library allows
us to pass a callback function:

```javascript
fs.readFile('abc.txt', function (err, content) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(content);
    }
});
```

This works pretty well. However, it can quickly get ugly when we have many
callbacks.

```javascript
io.readFile('other.txt', function (contents) {
    sendToServer (contents, function (response) {
        writeLog (response, function () {
            console.log('written!');
        });
    });
});
```

The code continues to nest in further towards the right. Some developers
lovingly refer to this as `callback hell`.

Promises are quite a bit easier to pass around and return to higher-level
functions:

```javascript
const filePromise = readFile('other.txt');
```

In this case, we can use `filePromise` in other functions to represent the file
contents when they are ready. It makes it easier to organize code in a more
readable way:

```javascript
filePromise.then((contents) => {
    // do something with the file contents
});
```

## Using Promises

JavaScript is `single-threaded`. Because of this you will find yourself writing
quite a bit of `asynchronous code`. This referes to writing code that will
exectue at some future point in time after something happened.

Providing a callback function as an argument is a classic way of handling
asynchronous code.

`Promises` provide an alternative:

```javascript
const promise = getServerData();

// similar to using a callback function argument, except we wire up
// the callback using .then
promise.then(function (data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data!', data);
});
```

Here `getServerData` returns a promise. We can call `.then` and provide a
function that is invoked once the server data is resolved.
