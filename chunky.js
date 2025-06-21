const chunk = (arr, size) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr1.push(arr.slice(i, i + size));
  }
  return arr1
};
