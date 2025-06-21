const flat = (arr, depth = 1) => {
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      const sigmant = flat(arr[i], depth - 1);
      arrr.push(...sigmant);
    } else {
      arrr.push(arr[i]);
    }
  }
  return arrr;
};
