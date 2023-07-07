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
- The **third argument** `arr` if the array itself.
