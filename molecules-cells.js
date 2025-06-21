const RNA = (str) => {
  let res = "";
  let arr = [
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
  ];
  let mapp = new Map(arr);
  for (let i = 0; i < str.length; i++) {
    if (mapp.has(str[i])) {
      res += mapp.get(str[i]);
    } else {
      res += str[i];
    }
  }
  return res;
};
const DNA = (str) => {
  let res = "";
  let arr = [
    ["C", "G"],
    ["G", "C"],
    ["A", "T"],
    ["U", "A"],
  ];
  let mapp = new Map(arr);
  for (let i = 0; i < str.length; i++) {
    if (mapp.has(str[i])) {
      res += mapp.get(str[i]);
    } else {
      res += str[i];
    }
  }
  return res;
};
