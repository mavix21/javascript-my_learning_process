# Array Map

## Map Function

The map function is stored on the `Array.prototype`. This means that every new
array we create has access to the method.

By passing a function to `map`, we apply it to every element in the array.
For example:

```javascript
const array = [1, 3, 5];

const result = array.map(function (x) {
    return x * 2;
})

console.log(result); // [2, 6, 10]
```

In this example, we pass an anonymous function returning `x` doubled. This
function is applied to every element in the array. `1` becomes `2`, `3` becomes
`6` and `5` becomes `10`.

### Multiple Arguments Gotcha

The function that is passed to `map` will actually receive multiple arguments.

```javascript
[10, 20].map((el, i, arr) => {
    console.log(el, i, arr);
});
```

What are `el`, `i` and `arr`?

This will hit `console.log` twice:

- **First Iteration** it will log `10, 0, [10, 20]`
- **Second Iteration** it will log `20, 1, [10, 20]`

So what are those arguments exactly?

- The **first argument** `el` is the element that is being passed to the
function
- The **second argument** `i` is the zero-based index of that element in the
array
- The **third argument** `arr` is the array itself.

Now, how might this cause unexpected behavior?

Let's say we had a function called `sayHello`:

```javascript
function sayHello(name, greeting) {
    if (greeting === undefined) {
        greeting = 'Hello';
    }

    return `${greeting} ${name}!`;
}
```

This function has a `greeting` parameter that will default to `Hello` if it is
not defined. It takes `name` and greets them in the console.

What would happen in this example?

```javascript
const result = ['Steve', 'Amanda'].map(sayHello);
```

You might expect result to be `['Hello Steve!', 'Hello Amanda!']`.

However, it is actually going to be `['0 Steve!', '1 Amanda!']`.

This is because the index is being passed to `sayHello` as the second argument.
If we want to use the default greeting we need to explicitly only send one
argument:

```javascript
const result = ['Steve', 'Amanda'].map(function (name) {
    return sayHello(name);
})
```

Here, result will be `['Hello Steve!', 'Hello Amanda!']` as expected.

> When in doubt, it's best to create an anonymous function and explicitly pass
the arguments to the function rather that depending on the function not to use
the last two arguments.
