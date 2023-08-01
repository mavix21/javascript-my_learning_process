function sum (numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

module.exports = sum;
