function firstAndLastSum(number) {
  number = String(number);
  return +number[0] + +number[number.length - 1];
}

console.log(firstAndLastSum(321430));
