const filterKeys = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func(key)) {
      res[key] = obj[key];
    }
  }
  return res;
};

const mapKeys = (obj, func) => {
  let res = {};
  for (const key in obj) {
    let newkey = func(key);
    res[newkey] = obj[key];
  }
  return res;
};

const reduceKeys = (obj, func, init="") => {

  for (const key in obj) {
    if (init === "") {
      init = key;
    } else {
      init = func(init, key);
    }
  }
  return init;
};

