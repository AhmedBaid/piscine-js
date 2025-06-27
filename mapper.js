const map = (arr, func) => {
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    arrr.push(func(arr[i], i, arr));
  }
  return arrr;
};

const flatMap = (arr, func) => {
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(func(arr[i],i,arr))) {
      arrr.push(...func(arr[i], i, arr));
    } else {
      arrr.push(func(arr[i], i, arr));
    }
  }
  return arrr;
};
