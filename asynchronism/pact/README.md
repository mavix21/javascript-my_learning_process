# Pact: A Promise Library

Promises should not be scary! Let's prove it by creating our own promise
implementation.

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
