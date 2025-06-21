const split = (str, sep) => {
  let word = "";
  let arr = [];
  if (sep == "") {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sep.length) === sep) {
      arr.push(word);
      word = "";
      i += sep.length - 1;
    } else {
      word += str[i];
    }
  }
  arr.push(word);
  return arr;
};
const join = (arr, sep) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length-1) {
      str += arr[i];
    } else {
      str += arr[i] + sep;
    }
  }
  return str
};
