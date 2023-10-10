function fn(element, index) {
  return element + index;
}

const arr = [2, 4, 6, 8];
const transformedArray = [];

for (let i = 0; i < arr.length; i++) {
  const transformedValue = fn(arr[i], i);
  transformedArray.push(transformedValue);
}

console.log(transformedArray);
