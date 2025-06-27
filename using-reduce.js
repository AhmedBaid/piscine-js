const adder = (arr, s = 0) => {
  let res = arr.reduce((a, b) => a + b, s);
  return res;
};

const sumOrMul = (arr, s = 0) => {
  let res = arr.reduce((a, b) => {
    console.log(a, b);

    if (b % 2 == 0) {
      return a * b;
    } else {
      return a + b;
    }
  }, s);
  return res;
};

const funcExec = (arrOFfunc, s) => {
  let res = arrOFfunc.reduce((a, b) => b(a), s);
  return res;
};
