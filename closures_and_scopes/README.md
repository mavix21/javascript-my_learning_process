# Closures and Scopes

## Asignment and Declaration of Variables

```javascript
// var
var firstName = 'Marcelo'; // Declaration and asignment
firstName = 'Jonas'; // Resignment
var firstName = 117;  // Redeclaration

// let
let fruit = 'Orange'; // Declaration and asignment
fruit = 'Kiwi'; // Reasignment

// const
const pet = 'Dog'; // Declaration and asignment
```

## Scope

Es el alcance que determina la accesibilidad de las variables, objetos
y funciones desde diferentes partes del código.

### Global Scope

### Function Scope

### Block Scope

```javascript
function fruits () {

    // This is a block
    if (true) {
        // Declaring and asigning variables inside a block
        var fruitOne = 'Cherry'; // function scope
        let fruitTwo = 'Kiwi'; // block Scope
        const fruitThree = 'Banana'; // block scope
    }

    console.log(fruitOne); // Cherry
    console.log(fruitTwo); // ReferenceError: fruitTwo is not defined
    console.log(fruitThree); // This line is not reached because of previous error
}

fruits();
```

## Closure

A closure is the combination of a function and the lexical environment within
which that function was declared. It allows a function to access variables from
its outer (enclosing) scope *even after outer function has finished executing.*

When a function is defined inside another function, the inner function forms a
closure. This closure retains a reference to the variables and parameters of its
outer function, even after the outer function has finised executing. It "closes
over" the variables, hence the term "closure".

To better understand closures, it's important to grasp the concept of lexical
scope.

### Lexical Scope

Lexical scope means that variables declared in an outer function are
accessible within its inner functions. This means child functions are lexically
bound to the execution context of their parents.

### Lexical Environment

When the JavaScript engine creates a new execution context for a function, it
creates a new lexical environment to store variables defined in that function
during the execution phase.

A lexical Environment is a data structure that holds an identifier-variable
mapping. (here identifier refers to the name of variables/functions, and the
variable is the reference to the actual object [including function type object]
or primitive value).

The lexical environment contains two components:

1. Environment record: It is the actual place where the variable and
    function declarations are stored.

2. Reference to the outer environment: It means it has access to its outer
    (parent) lexical environment.

```javascript
const myGlobal = 0;

function myFunction () {
    // myFunction lexical environment
    const myVariable = 1;

    console.log(myVariable); // 1

    // Nested function (Closure)
    function parent () {
        // parent lexical environment
        const parentVariable = 2

        // Can access myVariable because it's declared within the outer lexical environment
        // which is part of this inner function lexical environment as well
        console.log(myVariable, myGlobal); // 1 0

        function child () {
            console.log(parentVariable, myVariable, myGlobal) // 2 1 0
        }

        child();
    }

    parent();
}

myFunction();
```

`myFunction()` creates a local variable called myVariable and a function called
`parent()`. The `parent()` function is an inner function that is defined inside
`myFunction()` and is available only within the body of the `myFunction()`
function. The `parent()` function also has a local variable called `parentVariable`.
Since inner functions have access to the variables of outer functions, `parent()`
can access the variable `myVariable` declared in `myFunction()`.
