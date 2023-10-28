const fn = (num, len) => {
  return num * len;
};

let arr = [2, 4, 6, 8];
let returnedArray = [];

for (let i = 0; i < arr.length; i++) {
  returnedArray[i] = fn(arr[i], i);
}

console.log(returnedArray);
