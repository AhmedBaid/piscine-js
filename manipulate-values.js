const filterValues = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func(obj[key])) {
      res[key] = obj[key];
    }
  }
  return res;
};

const mapValues = (obj, func) => {
  let res = {};
  for (const key in obj) {
    res[key] = func(obj[key]);
  }
  return res;
};

const reduceValues = (obj, func,init) => {
  let res = 0;
  if(init!=undefined){
    res = init
  }
  for (const key in obj) {
    res = func(res, obj[key]);
  }
  return res;
};

