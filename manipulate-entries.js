const filterEntries = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func([key, obj[key]])) {
      res[key] = obj[key];
    }
  }
  return res;
};

const mapEntries = (obj, func) => {
  let res = {};
  let arr = [];
  for (const key in obj) {
    arr.push(...func([key, obj[key]]));
    res[arr[0]] = arr[1];
    arr = [];
  }
  return res;
};

const reduceEntries = (obj, func, init = "") => {
  for (const key in obj) {
    if (init === "") {
      init = key + obj[key];
    } else {
      init = func(init, [key, obj[key]]);
    }
  }
  return init;
};

const totalCalories = (obj) => {
    let res = reduceEntries(obj, (init,[key, value]) => {
      return init + (nutritionDB[key]["calories"] * value) / 100;
    },0);
  
  return Number(res.toFixed(1));
};

const lowCarbs = (obj) => {
  let res = filterEntries(obj, ([key, value]) => {
    let calc = (nutritionDB[key]["carbs"] * value) / 100;    
    return calc < 50;
  });  
  return res;
};

const cartTotal = (obj) => {
  let res = mapEntries(obj, ([key, value]) => {
    let item = {};
    for (let keyy in nutritionDB[key]) {
      item[keyy] = Number(((nutritionDB[key][keyy] * value) / 100).toFixed(3));
    }
    return [key, item]; 
  });
  return res;
};