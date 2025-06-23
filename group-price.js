const groupPrice = (str) => {
  let arr = [];
  let regex = /(USD|\$)(\d+)\.(\d+)/g;
  let k;

  while ((k = regex.exec(str)) !== null) {
    let ar = [];
    ar.push(k[0], k[2], k[3]);
    arr.push(ar);
  }
  return arr;
};
