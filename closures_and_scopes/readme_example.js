const myGlobal = 0;

function myFunction () {
  // myFunction lexical environment
  const myVariable = 1;

  console.log(myVariable); // 1

  // Nested function (Closure)
  function parent () {
    // parent lexical environment
    const parentVariable = 2;

    // Can access myVariable because it's declared within the outer lexical environment
    // which is part of this inner function lexical environment as well
    console.log(myVariable, myGlobal); // 1 0

    function child () {
      console.log(parentVariable, myVariable, myGlobal); // 2 1 0
    }

    child();
  }

  parent();
}

myFunction();
