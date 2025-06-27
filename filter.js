const filter = (arr, func) => {
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      arrr.push(arr[i]);
    }
  }
  return arrr;
};

const reject = (arr, func) => {
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      arrr.push(arr[i]);
    }
  }
  return arrr;
};
const partition = (arr, func) => {
    let arrr=[]
    arrr.push(filter(arr,func))
    arrr.push(reject(arr,func))
    return arrr
};
