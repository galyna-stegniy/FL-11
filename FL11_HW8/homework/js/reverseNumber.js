function reverseNumber(number) {
  let tmp = 0;
  let result = 0;
  if (number > 0) {
    while (number >= 1) {
      tmp = Math.floor(number % 10);
      result = result * 10 + tmp;
      number = number / 10;
    }
  } else {
    while (number <= -1) {
      tmp = Math.ceil(number % 10);
      result = result * 10 + tmp;
      number = number / 10;
    }
  }
  return result;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
