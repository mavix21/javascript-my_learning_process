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

### Errors

Sometimes, a promises `does not resolve successfully`.

For example: We want to get data from the server and the server cannot handle
our request. In this case we might receive an error response code from the
server.

In promises, we can handle errors with `.catch`:

```javascript
const promise = getDataFromServer();

promise.catch((err) => {
    console.error('oh no, something bad happened');
});
```

> From the promise implementer's side, this is known as `rejecting` the
promises, as opposed to `resolving` with server data.

## Creating a Promise

We learned how to handle a returned promise. In this section `we create a
promise`.

Most modern JavaScript environments have a built-in `Promise` object that can
be use to create a new Promise:

```javascript
const promise = new Promise(function (resolve, reject) {
    resolve('resolve successful!');
});
```

The function provided to the promise is called an **executor** function. This
function is called inmediately and typically will be set to resolve after
something asynchronous has happened.

### Executor Function

The function passed to `Promise` is called the `executor` function.

```javascript
new Promise (function executor (resolve, reject) {
    // inside the executor function
    // we can either resolve or reject
    if (success) {
        resolve();
    }
    else {
        reject();
    }
});
```

You can see the `executor` function in the above example is named. This function
is called `inmediately` once the promise is created.

Inside this function we can `resolve`, which will call all functions wired as
callbacks in the promise `then` method.

Alternatively, we can `reject`, which will call functions wired as callbacks in
the promise `catch` method.

> Both `resolve` and `reject` can take arguments that will be passed directly
to the `then` and `catch` callbacks respecively.

### File System Example

Let's see and example where we wrap a callback function in a promise:

```javascript
const promise = new Promise(function (resolve, reject) {
    fs.readFile('abc.txt', function (err, contents) {
        if (err) {
            // something bad happened, reject with the err
            reject(err);
        }
        else {
            // success! resolve the promise with the contents
            resolve(contents);
        }
    });
});
```

We are reading a file from the file system and wrapping the callback to create
a promise. If there is an error, we'll reject the promise, which is caught by a
`catch` callback:

```javascript
promise.catch(function (err) {
    console.error('something went wrong', err);
});
```

Otherwise, we'll resolve the promise with the contents of the file:

```javascript
promise.then(function (fileContents) {
    console.log(fileContents);
});
```

## Async Await

Another useful tool in the asynchronous JavaScript toolbet is `async/await`.

With these two keywords we can handle promises line-by-line like synchronous
code:

```javascript
async function getData () {
    const result = await severCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
```

In this example, `serverCall` returns a promise and the `result` is the resolved
value.

> The `return` line does not run until after the `serverCall` promise is
complete. This is the case for anything after the `await` line.

The above example is functionally equivalent to:

```javascript
function getData () {
    return serverCall().then((result) => {
        return result;
    });
}
```

In both cases, `getData` returns a promise and the promise resolves with the
result.

> You can think of `async` as a way of denoting that a function will return a
promise.

### Async

The `async` keyword will make a function return a promise. Even if we were to
make a function like this:

```javascript
async function test () {

}
```

By adding `async` in front, this will now return a promise when invoked.

This allows us to write asynchronous code inside of the `test` function as if it
were synchronous.

For example:

```javascript
async function test () {
    await getServerData();

    return 3;
}
```
