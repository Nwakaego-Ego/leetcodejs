// function fn(element, index) {
//     return element + index;
// }
// var arr = [2, 4, 6, 8];
// var transformedArray = [];

// for (var i = 0; i < arr.length; i++) {
//     var transformedValue = fn(arr[i], i);
//     transformedArray.push(transformedValue);
// }
// console.log(transformedArray);

function fn(arr, filterFn) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (filterFn(arr[i], i)) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

const arr = [2, 4, 6, 8];

function num(num) {
  return num % 2 === 0;
}

const allfiltered = fn(arr, num);
console.log(allfiltered);
