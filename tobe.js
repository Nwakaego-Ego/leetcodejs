function expect(val) {
  function tobe(bal, val) {
    if (val === bal) {
      return "not equal";
    }
  }

  function nottobe(cal, val) {
    if (val !== cal) {
      return "equal";
    }
  }
}

try {
  toBe(5, 4);
  notToBe(5, 5);
} catch (error) {
  console.error(error.message);
}
