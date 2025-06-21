const reverse = (strORarr) => {
  const arr = [];
  for (let i = strORarr.length - 1; i >= 0; i--) {
    arr.push(strORarr[i]);
  }
  return typeof strORarr === "string" ? arr.join("") : arr;
};
const split = (str, sep) => {
  let result = [];
  let current = "";
  let i = 0;

  while (i < str.length) {
    if (str.slice(i, i + sep.length) === sep) {
      result.push(current);
      current = "";
      i += sep.length; // Skip the full separator
    } else {
      current += str[i];
      i++;
    }
  }

  result.push(current); // Push the last segment
  return result;
};
