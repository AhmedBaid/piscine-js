const map = (arr, func) => {
  let arr = [];
  for (let i = 0; i < arr.length; i++) {
    arr.push(func(arr[i]));
  }
  return arr
};
