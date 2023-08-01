function allUnique (numbers) {
  return numbers.reduce((accumulator, currentValue, index) => {
    if (!accumulator) return false;
    return (numbers.indexOf((currentValue) === index));
  }, true);
}

module.exports = allUnique;
