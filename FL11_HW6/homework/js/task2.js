let a = parseFloat(prompt('Input side a length'));
let b = parseFloat(prompt('Input side b length'));
let c = parseFloat(prompt('Input side c length'));
if (a + b <= c || a + c <= b || b + c <= a) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Equivalent triangle');
} else if (a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
