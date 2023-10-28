// function reducer(init, num, fn) {
//   let val = init;
//   for (let i = 0; i < num.length; i++) {
//     val = fn(init, num[i]);

//     return val;
//   }
// }

// let num = [2, 4, 6, 8];
// let initialValue = 0;

// function reduce(currentValue, reduceValue) {
//   return currentValue - reduceValue;
// }

// const reducedValue = reducer(initialValue, num, reduce);
// console.log(reducedValue);

function reducer(init, num, fn) {
  let val = init;
  for (let i = 0; i < num.length; i++) {
    val = fn(init, num[i]);

    return val;
  }
}

let num = [2, 4, 6, 8];
let initialValue = 0;

function reduce(currentValue, reduceValue) {
  return currentValue - reduceValue;
}

const reducedValue = reducer(initialValue, num, reduce);
console.log(reducedValue);
