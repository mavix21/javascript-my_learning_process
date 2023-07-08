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
