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
