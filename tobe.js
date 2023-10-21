function expect(val) {
  return {
    tobe: function (otherVal) {
      if (val !== otherVal) {
        throw new Error("Not Equal");
      }
    },
    nottobe: function (otherVal) {
      if (val === otherVal) {
        throw new Error("Equal");
      }
    },
  };
}

try {
  expect(5).tobe(4);
  expect(5).nottobe(5);
} catch (error) {
  console.error(error.message);
}

// // I apologize for any confusion. In your initial request, you mentioned that you wanted to create a function expect that
// returns an object with toBe and notToBe methods. However, in your code, you placed the toBe and notToBe functions inside
// the expect function. The structure I provided in my previous response aligns with your original requirement.

// // If you prefer to have the toBe and notToBe functions outside the expect function, you can structure your
// code differently like this:

function toBe(val, otherVal) {
  if (val !== otherVal) {
    throw new Error("Not Equal");
  }
}

function notToBe(val, otherVal) {
  if (val === otherVal) {
    throw new Error("Equal");
  }
}

try {
  toBe(5, 4);
  notToBe(5, 5);
} catch (error) {
  console.error(error.message);
}
