function createHelloWorld() {
  function func() {
    return "Hello World";
  }

  return func;
}

let chi = createHelloWorld();

console.log(chi());
