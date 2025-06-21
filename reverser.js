const reverse = (strORarr) => {
  const arr = [];
  for (let i = strORarr.length - 1; i >= 0; i--) {
    arr.push(strORarr[i]);
  }
  return typeof strORarr === "string" ? arr.join("") : arr;
};
