function pipe(number, ...args) {
  let result = number;
  for (let i = 0; i < args.length; i++) {
    result = args[i](result);
  }
  return result;
}

function addOne(x) {
  return x + 1;
}
console.log(
  pipe(
    1,
    addOne
  )
);
console.log(
  pipe(
    1,
    addOne,
    addOne
  )
);
