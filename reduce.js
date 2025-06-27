const fold = (arr, func, accum) => {
  for (let i = 0; i < arr.length; i++) {
    accum = func(accum, arr[i]);
  }
  return accum;
};
const foldRight = (arr, func, accum) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    accum = func(accum, arr[i]);
  }
  return accum;
};
const reduce = (arr, func) => {
  return fold(arr.slice(1), func, arr[0]);
};
const reduceRight = (arr, func) => {
  return foldRight(arr.slice(0, arr.length - 1), func, arr[arr.length - 1]);
};
