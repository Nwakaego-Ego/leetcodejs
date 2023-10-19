// function fn(element: number, index: number): number {
//   return element + index;
// }

// const arr: number[] = [2, 4, 6, 8];
// const transformedArray: number[] = [];

// for (let i = 0; i < arr.length; i++) {
//   const transformedValue = fn(arr[i], i);
//   transformedArray.push(transformedValue);
// }

// console.log(transformedArray);

const formula = (element: string) => {
  let int: number = 1;
  const counterfunction = () => {
    return int++;
  };
  return counterfunction;
};

const all = func("some_element");
console.log(all());
console.log(all());
console.log(all());
