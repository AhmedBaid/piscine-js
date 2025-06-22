const ionOut = (str) => {
  let regex = /\w+tion(?!\w)/g;
  let arr1 = str.match(regex) || [];
  
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i].replace("ion", ""));
  }
  return res;
};
