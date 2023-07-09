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

We're going to write two functions for our dialog component:

1. `onClose` - This method will take a `callbackFunction` as an argument and
store it on our `Dialog` instance.

2. `close` - This function will be used to close the dialog. When we close the
dialog, we'll want to call all the callback functions stored.

In practice, when we want to use the `Dialog` component, we could wire up some
logic to execute when a specific dialog is closed. For example, we could refresh
the data on the page:

```javascript
const dialog = new Dialog();

dialog.onClose(function () {
    // refresh data on the page to reflect state changes made inside dialog
    refreshData();
})
```

> Remember in the previous exercise the callback was invoked asynchronously by
`setTimeout`. This callback is similar! The main difference here is the `close`
function is kicked off by the user when they click out of the dialog.

## 2. For Each

Let's create our own `forEach` function.

This function will take two parameters:

1. An `array` of elements
2. A callback `function` that we want to return for each element in the array

Be sure to call the callback `function` with both the current element in the
array and the zero-based `index`.

Example:

```javascript
forEach(['a', 'b', 'c'], (el, i) => {
    console.log(e, i);
})
```

The `console.log` line should run three times, logging:

1. `a, 0`
2. `b, 1`
3. `c, 2`

## 3. Map Callback

Let's write our own map function. We'll want to take an array and run some
function over each element, replacing that element with the function's return
value.

For example:

```javascript
const newArray = map([1, 2, 3], (x) => {
    return x * 2;
})

console.log(newArray); // [2, 4, 6]
```

Map each element in the array to its new value returned by the `callback`
function.

Just like the previous exercise, you'll want to run a function on each element
in the array. Only this time you'll need to create a new array wich you'll
return at the end of the `map` iteration.
