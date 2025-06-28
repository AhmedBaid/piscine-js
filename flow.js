const flow = (arrOFfunc) => {
  return function (...params) {
    let res;
    arrOFfunc.reduce((func1, func2) => {
      res = func1(...params) + func2(...params);
    }, func1);
    return res;
  };
};
