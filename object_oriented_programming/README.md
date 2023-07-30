# Javascript Object Oriented Programming

## This Keyword

In Javascript, the `this` keyword provides a function with **context**.
As we'll see further below, Javascript has a powerful tool for creating new
objects and linking them to a common function. These functions can be written
once and applied to whatever `this` is.

```javascript
// an example of a 'constructor' function
function Person () {
    this.name = 'Steve';
    this.age = 32;
}
```

In Javascript, you can always access the keyword `this`. It is a way
of defining the `context` of a function.

In global scope (not inside a function), `this` refers to the module itself
within Node.js or the `window` within the browser.

When it comes to functions, `this` can be set in a few different ways. Let's
focus first on how we can explicitly set it.

```javascript
function sum () {
    return this.a + this.b;
}
```

If we were to run sum() directly, `this` would be set from the global scope and
likely neither `a` nor `b` would be defined.

We could instead, `call` the function with a specific `context`:

```javascript
const result = sum.call({ a: 2, b: 4 });

console.log(result); // 6
```

The method `call` is available on all Javascript functions. The first argument
we pass to `call` becomes `this` inside the function.

> Another method that manipulates a function's context is `apply`.

### Call Versus apply

Call and Apply are very similar methods. They both exist on every Javascript
function and they both allow you to set the **context** `this`.

The difference comes when you want to pass arguments to the function:

```javascript
function totalThings (a, b, c) {
    return `There are ${a + b + c} ${this}`;
}
```

Let's say we wanted this string to be: 'There are 15 Students'. There are two
ways we could go about it. We could use `call`:

```javascript
totalThings.call('Students', 10, 3, 2);
```

Or we can use `apply`:

```javascript
totalThings.apply('Students', [10, 3, 2]);
```

In both cases, `this` is set to 'Students' and the arguments `a`, `b` and `c`
are the values `10`, `3` and `2` respectively.

The difference is that `call` takes a list of arguments, while `apply` takes a
single array of arguments.

### Binding

Rather than relying on a function to be called with the correct `this` at the
time of invocation, we can **bind** functions:

```javascript
function thisName () {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' });

console.log(newFunction()); // Ted
console.log(thisName()); // undefined
```

Notice that `bind` does not change the nature of the original function. It
creates a new function that is bound with the provided `this`.

Once a function is bound, the binding **cannot be overwritten**. Let's say we
tried to bind `newFunction` from above:

```javascript
const newFunction2 = newFunction.bind({ name: 'Walt' });

console.log(newFunction2()); // Ted
```

### Binding arguments

You can bind arguments to a function to create partially applied functions.

```javascript
function add (x, y) {
    return x + y;
}
```

Not a very exciting function on it's own. We can bind an argument to `add` to
create a new type of function:

```javascript
const addTwo = add.bind(null, 2);

console.log(addTwo(2)); // 4
console.log(addTwo(10)); // 10
```

### Implicit Binding

Without explicitly setting `this` with `call` or `apply`, there are a few rules
that dictate what `this` will be for a function.

These rules depend on how the function is called. Let's take a look at a
function defined as an object's property:

```javascript
const obj = {
    value: 2,
    getValue: function () {
        return this.value;
    }
}
```

Depending on *how* we call `getValue`, the result could be **very different**:

```javascript
console.log(obj.getValue()); // 2
```

We called the function by accessing it on the object's property. The `this`
keyword is implicitly bound to the object is being called on.

Let's see another example using the same `obj`:

```javascript
const fn = obj.getValue;

console.log(fn()); // undefined
```

In this second example, `this` is no the `obj` itself. It is actually the
global `this`. Without being called directly on the object, `this` is not bound
at all!

> The place where the function is called is generally referred to as the
**call site** of the function. If the function is not otherwise bound, it will
determine the value of `this`.

### Unbound Function

In Javascript, it is often helpful to define functions inside of other
functions. In these cases, keeping track of the bound context can be quite
tricky!

Let's take a look at an example:

```javascript
const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear () {
    setTimeout(function () {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 };

addYear.call(person);
```

This function should run after one year, incrementing Fred's age. However, when
the function *finally* does run, `this` will not be set to the person. The
function passed to `setTimeout` is not bound to the same `this` and defaults to
the global `this`.

If we want to fix this, there are several ways:

#### 1. Closure

A common way to fix issues with context in Javascript is to capture the value
of `this` inside of a function scope. Then you can refer to the new variable
knowing it hasn't changed:

```javascript
function addYear () {
    const that = this;
    setTimeout(function () {
        that.age++;
    }, YEAR);
}
```

This defines `that` which captures the context `this` within the `addYear`
scope. Then we use `that` to increment age.

#### 2. Bind the Function

Just as we did before, we can bind the function inside of the `setTimeout`:

```javascript
function addYear () {
    setTimeout(function () { 
        this.age++;
    }.bind(this), YEAR);
}
```

We use `.bind` to create a new function from the one we pass to `setTimeout`.
This new function is bound to the same context as the `addYear` function
itself.

#### 3. Arrow Function

There is another way to define function expressions, reffered to as 'Arrow
Syntax'. The difference between the arrow syntax and the traditional function
syntax is in behavior with `this`. The arrow syntax will actually capture the
context of the surrounding function here:

```javascript
function addYear () {
    setTimeout(() => {
        this.age++;
    }, YEAR);
}
```

Just by changing from `function () { }` to `() => { }`, we can fix the context
issue!

## The Prototype Chain

### The constructor function

*Constructors* are functions that create new objects. They define properties
and behaviors that will belong to the new object. Think of them as a blueprint
for the creation of new objects.

```javascript
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

const cardinal = new Bird('Bruce', 'red');
const canary = new Bird('Mildred', 'blue');

console.log(cardinal.name) // Bruce
console.log(canary.color) // blue
```

Here `Bird` is just a regular Javascript function. Often it is referred to as a
**constructor** function, although it is not a special function by any means.
**It is capitalized purely by convention**. We capitalize it to show we plan to
use it with the `new` operator.

Using the `new` operator we can create new **instances** of `Bird`. The `new`
operator will create a new object and set it to `this` within the `Bird`
function in the example above. implicitly, `new` will also return this object
(if no other object is returned).

> In the **[This keyword](#this-keyword)** section we went over rules for
binding `this`. Using `new` is another rule for how it is bound. In this case,
the new instance of the car is used for `this` in the constructor function.

- Constructors are defined with a capitalized name to distinguish them from
other functions that are not `constructors`.
- Constructors use the keyword `this` to set properties of the object they will
create. Inside the constructor, `this` refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as
other functions might.

Anytime a constructor function creates a new object, that object is said to be
an *instance* of its constructor. Javascript gives a convenient way to verify
this with the `instanceof` operator. `instanceof` allows you to compare an
object to a constructor, returning `true` or `false` based on wheter or not
that object was created with the constructor.

```javascript
cardinal instanceof Bird; // true
```

If an object is created without using a constructor, `instanceof` will verify
that is not an instance of that constructor:

```javascript
const canary = {
    name: 'Mildred';
    color: 'Yellow';
    numLegs: 2;
};

canary instanceof Bird; // false
```

### Prototypes

Many programming languages have a concept of a **Class**. Classes are templates
for creating objects called **instances**. Each instance will have it's own set
of properties called **state**. The class provides initial state values and
functions copied into each new instance.

Javascript **does not** have classes in a traditional sense. It has
**prototypes**. They function similarily with a few key differences. Primarily,
prototypes provide a way to share properties and functions by **linking objects
together**. This is contrary to classes which traditionally copy functionality
to new instances.

> You can think of prototypes as a *chain of linked objects*.

#### Prototype Chain

Let's consider a simple example:

```javascript
function Animal (name) {
    this.name = name;
}

const animal = new Animal('Bud');
```

The animal here will already have some methods available: `valueOf`,
`hasOwnProperty`, `toString` and more depending on the Javascript environment.
Where do these methods come from?

They come from `Object.prototype`. This is the top of the prototype chain for
every object in Javascript.

**Note** that these methods are not created anew for every object! They are
actually the same methods:

```javascript
const animal = new Animal('Bud');
const animal2 = new Animal('Lassie');

console.log(animal.hasOwnProperty === animal2.hasOwnProperty); // true
```

First, the Javascript engine will look up to see if the animal instances have a
method `hasOwnProperty`. Then it will look on the `Animal.prototype`. If not,
it will continue to `Object.prototype` and find the method there.

Since bot `animal` and `animal2` refer to the `hasOwnProperty` method on
`Object.prototype`, the reference is equal and returns `true` above.

### Object Properties

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

Now that we created an instance of the `supertype` (or parent) `Animal`, we'll
set the `prototype` of the subtype (or child) -in this case, `Bird` -to be an
instance of `Animal`

```javascript
Bird.prototype = Object.create(Animal.prototype);
```

Remember that the `prototype` is like the "recipe" for creating an object. In a
way, the recipe for `Bird` now includes all the key "ingredients" from `Animal`.

```javascript
const duck = new Bird('Donald');
duck.eat();
```

### Reset the inherited constructor property

When an object inherits its `prototype` from another object, it also inherits
the supertype's constructor property.

Here is an example:

```javascript
function Bird () { };
Bird.prototype = Object.create(Animal.prototype);
const duck = new Bird();
console.log(duck.constructor); // [Function: Animal]
```

But `duck` and all instances of `Bird` should show that they were constructed
`Bird` and not by `Animal`. To do so, you can manually set the constructor
property of `Bird` to the `Bird` object.

```javascript
Bird.prototype.constructor = Bird;
console.log(duck.constructor); // [Function: Bird]
```

### Add methods after inheritance

A constructor function that inherits its `prototype` object from a supertype
constructor function can still have its own methods in addition to inherit
methods.

For example, `Bird` is a constructor that inherits its `prototype` from
`Animal`:

```javascript
function Animal () { };
Animal.prototype.eat = function () {
    console.log('nom nom nom');
};

function Bird () { };
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherit from `Animal`, you want to add behavior to
`Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added
to `Bird`'s `prototype` the same way as any constructor function:

```javascript
Bird.prototype.fly = function () {
    console.log("I'm flying!");
};
```

Now instances of `Bird` will have both `eat()` and `fly()` methods:

```javascript
const duck = new Bird();
duck.eat(); // nom nom nom
duck.fly(); // I'm flying!
```
