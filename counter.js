const func = () => {
  let int = 1;
  const counterfunction = () => {
    return int++;
  };
  return counterfunction;
};

const cer = func();
console.log(cer());
console.log(cer());
console.log(cer());
