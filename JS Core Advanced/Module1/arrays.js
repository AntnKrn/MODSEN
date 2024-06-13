function SumOfSquareElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
    sum += array[i];
  }

  return sum;
}

console.log(SumOfSquareElements([100, 23]));
