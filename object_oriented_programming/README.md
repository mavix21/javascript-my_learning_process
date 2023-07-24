# Javascript Object Oriented Programming

## Object Properties

There are two kinds of properties: *own properties* and `prototype` properties.
Own properties are defined directly on the object instance itself. And
prototype properties are defined on the `prototype`.

```javascript
function Bird (name) {
    this.name = name; // own property
}

Bird.prototype.numLegs = 2; // prototype property
```

Here is how you add `duck`'s own properties to the array `ownProps` and
`prototype` properties to the array `prototypeProps`.

```javascript
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(owProps); // ["name"]
console.log(prototypeProps); // ["numLegs"]
```

## The Prototype Chain

All objects in Javascript (whit few exceptions) have a `prototype`. Also, an
object's `prototype` itself is an object.

```javascript
function Bird (name) {
    this.name = name;
}

typeof Bird.prototype; // object
```

Because a `prototype` is an `object`, a `prototype` can have its own
`prototype`! In this case, the prototype of `Bird.prototype` is
`Object.prototype`:

```javascript
Object.prototype.isPrototypeOf(Bird.prototype); // true
```

How is this useful? You may recall the `hasOwnProperty` method:

```javascript
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

The `hasOwnProperty` method is defined in `Object.prototype`, which can be
accessedby `Bird.prototype`, which can then be accessed by `duck`. This is an
example of the prototype chain. In this prototype chain, `Bird` is the
supertype for `duck`, while `duck` is the subtype. `Object` is a supertype for
both `Bird` and `duck`. Object is a supertype for all objects in JavaScript.
Therefore, any object can use the `hasOwnProperty` method.
