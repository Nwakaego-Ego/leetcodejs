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

