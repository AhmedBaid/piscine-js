const flow = (arrOFfunc) => {
  return function (...params) {
    let res = arrOFfunc[0](...params);
    for (let i = 1; i < arrOFfunc.length; i++) {
      res += arrOFfunc[i](res);
    }
    return res;
  };
};
