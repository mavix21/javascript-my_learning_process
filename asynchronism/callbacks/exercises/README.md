# Excercises

## 0. Make Run Callback Asynchronous

Modify `runCallback` to make `callbackFunction` run asynchronously. Use
`setTimeout` and invoke `callbackFunction` 1000 milliseconds (1 second) after
`runCallback` has been called.

## 1. Dialog Callback

We will create a callback that will be invoked by user interaction. Compare
this usage to the previous exercise where our callback was fired once an alotted
amount of time had passed.

Imagine we have a basic dialog component for our web application. This `Dialog`
component will use the JavaScript `class`, so we can create a new instance of
the dialog whenever we need one.
