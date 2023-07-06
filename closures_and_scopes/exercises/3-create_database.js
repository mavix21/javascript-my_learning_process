#!/usr/bin/node

function createDatabase () {
  const storage = ['Apple', 'Banana', 'Carrot'];

  function addToDB (item) {
    storage.push(item);
    console.log(storage);
  }

  function clearDB () {
    storage.length = 0;
  }

  return [addToDB, clearDB];
}

const [add, clear] = createDatabase();
add('Added');
clear();
add('Single');
