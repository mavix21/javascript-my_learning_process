# Array Reduce

Use `reduce` when you have an array of elements you'd like to combine into a
single value or object.

In a simple case, this could be taking an array of numbers, say `[1, 2, 3]`,
summing all the numbers together, and returning the resulting value (`6`).

## Reduce to a Sum

```
    Reduce Sum in 2 iterations
    [1, 2, 4]
    - Iteration #1 
    Accumulator:  1 +
    currentValue: 2

    - Iteration #2
    Accumulator:  3 +
    currentValue: 4
    ---------------
    Final value: 7
```

## First Iteration

In the first iteration the `accumulator` is `1` and the `currentValue` is `2`.

The `accumulator` is the value "accumulated" or carried through the entire
function. When you return a value in the `reduce` function, it will become the
**accumulator** for the next iteration.

> Why `1` is the first accumulator value? By default, the `reduce` function
will use the first value in the array as the accumulator if it is not provided.

The `currentValue` will change each iteration, moving forward to the next value
in the array.

## Second Iteration

After we add `1 + 2` and `return` it, the value `3` will be used for the
accumulator in the second iteration.

The `currentValue` will be the next item in the array, which is `4`.

After these two iterations, our reduce function will return with a final value
of `7`.
