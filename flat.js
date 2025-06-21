const flat = (arr, depth = 1) => {
 
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])&& depth!= 0) {
      const kk = flat(arr[i], depth - 1);
      arrr.push(...kk);
    } else {
      arrr.push(arr[i]);
    }
  }
  return arrr;
};
console.log(flat([1]));
