// const func = () => {
//   let int = 1;
//   const counterfunction = () => {
//     return int++;
//   };
//   return counterfunction;
// };

// const cer = func();
// console.log(cer());
// console.log(cer());
// console.log(cer());

const createCounter = () => {
  let init = 1;
  const increment = () => {
    return init++;
  };

  const decrement = () => {
    return init--;
  };

  const reset = () => {
    return init;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

let data = createCounter();
console.log(data.increment());
console.log(data.decrement());
console.log(data.reset());
