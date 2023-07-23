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
