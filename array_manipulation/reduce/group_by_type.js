function group (foods) {
  return foods.reduce((accumulator, currentValue) => {
    accumulator[currentValue.type] ??= [];
    accumulator[currentValue.type].push(currentValue.food);

    return accumulator;
  }, {});
}

const foods = [
  { food: 'carrot', type: 'vegetable' },
  { food: 'apple', type: 'fruit' },
  { food: 'cheese', type: 'dairy' },
  { food: 'orange', type: 'fruit' },
  { food: 'quinoa', type: 'grain' },
  { food: 'broccoli', type: 'vegetable' },
  { food: 'rice', type: 'grain' }
];

console.log(group(foods));

module.exports = group;
