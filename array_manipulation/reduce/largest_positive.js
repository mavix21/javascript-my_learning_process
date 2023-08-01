/*
 * @numbers is an array full of numbers
 * let's find the largest and return it
 * i.e. [2, 3, 5, 1, 4] => 5
 * if we don't find any positive numbers, simply return 1
 * i.e. [-1, -2, -4] => 1
 */
function largest (numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  }, 1);
}

module.exports = largest;
