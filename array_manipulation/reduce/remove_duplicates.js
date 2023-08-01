function removeDuplicates (numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }

    return accumulator;
  }, []);
}

console.log(removeDuplicates([2, 3, 1, 4, 2, 3, 9]));
