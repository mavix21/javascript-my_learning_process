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
example of the prototype chain. In this prototype chain, `Bird` is the supertype
for `duck`, while `duck` is the subtype. `Object` is a supertype for

Notice in the example below that the `describe` method is shared by `Bird` and
`Dog`:

```javascript
Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
};
```

The `describe` method is repeated in two places. The code can be edited to follow
the DRY principle by creating a `supertype` (or parent) called Animal:

```javascript
function Animal () { };

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log('My name is' + this.name);
    }
};
```

How to reuse the methods of `Animal` inside `Bird` and `Dog` without defining
them again? Using inheritance. First, we make an instance of the `supertype`
(or parent). One way to create an instance of `Animal` is using the `new`
operator:

```javascript
const animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance. Instead,
here's an alternative approach without those disadvantages:

```javascript
const animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object, and sets `obj` as the new object's
`prototype`. Recall that the `prototype` is like the "recipe" for creating an
object. By setting the `prototype` of animal to be the `prototype` of `Animal`,
you are effectively giving the `animal` instance the same "recipe" as any other
instance of `Animal`.

```javascript
animal.eat();
animal instanceof Animal; // true
```

The `instanceof` method here would return `true`.
