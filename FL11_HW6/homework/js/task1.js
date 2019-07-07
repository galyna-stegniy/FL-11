let a1 = parseFloat(prompt('Enter a1 coordinate'));
let a2 = parseFloat(prompt('Enter a2 coordinate'));
let b1 = parseFloat(prompt('Enter b1 coordinate'));
let b2 = parseFloat(prompt('Enter b2 coordinate'));
let c1 = parseFloat(prompt('Enter c1 coordinate'));
let c2 = parseFloat(prompt('Enter c2 coordinate'));
let divBy2 = 2;
let mid1 = (a1 + b1) / divBy2;
let mid2 = (a2 + b2) / divBy2;
if (mid1 === c1 && mid2 === c2) {
  console.log(true);
} else {
  console.log(false);
}
