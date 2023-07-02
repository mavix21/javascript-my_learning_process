# Closures and Scopes

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
