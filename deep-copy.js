const deepCopy = (param) => {
  let res = [];
  if (Array.isArray(param)) {
    param.forEach((p) => {
      if (Array.isArray(p)) {
        res.push(deepCopy(p));
      } else {
        res.push(p);
      }
    });
  } else {
    return {...param};
  }
  return res;
};
