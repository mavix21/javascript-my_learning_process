#!/usr/bin/node

function stringBuilder () {
  let result = '';

  function add (characters) {
    result += characters;
    return result;
  }

  return add;
}

const builder = stringBuilder();
let text = builder('Hello ');
text = builder('there ');
text = builder('friend!');
console.log(text);
