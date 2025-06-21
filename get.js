const get = (src, path) => {
  let arr = path.split(".");
  let nested = src;  
  for (let i = 0; i < arr.length; i++) {
    if (typeof nested === "undefined") {
      return undefined;
    }
    nested = nested[arr[i]];
  }
  return nested;
};
