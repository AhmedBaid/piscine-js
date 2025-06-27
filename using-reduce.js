const adder = (arr, s = 0) => {
  return arr.reduce((a, b) => a + b, s);
};

const sumOrMul = (arr, s = 0) => {
  return arr.reduce((a, b) => {
    if (b % 2 == 0) {
      return a * b;
    } else {
      return a + b;
    }
  }, s);
};

const funcExec = (arrOFfunc, s) => {
  return arrOFfunc.reduce((a, b) => b(a), s);
};
