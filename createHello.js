function createHelloWorld() {
  function func() {
    return "Hello World";
  }

  return func;
}

let final = createHelloWorld();

console.log(final());
