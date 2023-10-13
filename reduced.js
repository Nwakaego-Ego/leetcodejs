var customReduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

const nums = [2, 4, 6, 8];
const initialValue = 1;

function reducer(currentValue, reducedValue) {
  return currentValue - reducedValue;
}

let result = customReduce(nums, reducer, initialValue);
console.log(result);

// // Define a custom reducer function
// const customReduce = function (nums, fn, init) {
//   let result = init;
//   for (let i = 0; i < nums.length; i++) {
//     result = fn(result, nums[i]);
//   }
//   return result;
// };

// let initialValue = 1;
// let allVal = [];

// const nums = [2, 4, 6, 8];

// // Example of using the custom reducer function
// const reducer = function (accumulator, currentValue) {
//   return accumulator - currentValue;
// };

// const result = customReduce(nums, reducer, initialValue);

// console.log(result); // This will output the result of the reduction.
