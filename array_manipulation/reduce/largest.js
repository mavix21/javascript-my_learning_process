function largest (numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return (accumulator > currentValue ? accumulator : currentValue);
  });
}

console.log(largest([3, 1, 8, -2, 5, 0, 4, 7]));

module.exports = largest;
