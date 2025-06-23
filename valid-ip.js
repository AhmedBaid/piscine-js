const findIP = (str) => {
  const regex = /(\d+)\.(\d+)\.(\d+)\.(\d+):?(\d*)/g;
  let match;
  let arr = [];
  let bigarr = [];
  let res = [];
  while ((match = regex.exec(str)) !== null) {
    if (match[5] == "") {
      arr.push(match[0], match[1], match[2], match[3], match[4]);
    } else {
      arr.push(match[0], match[1], match[2], match[3], match[4], match[5]);
    }
    bigarr.push(arr);
    arr = [];
  }
  for (let i = 0; i < bigarr.length; i++) {
    let valid = true;
    if (bigarr[i].length == 5) {
      for (let k = 1; k < bigarr[i].length; k++) {
        if (bigarr[i][k].length != 1) {
          if (bigarr[i][k][0] == "0" || Number(bigarr[i][k]) > 255) {
            valid = false;
            break;
          }
        }
      }
      if (valid) {
        res.push(bigarr[i][0]);
      }
    } else {

      for (let k = 1; k < bigarr[i].length; k++) {
        if (bigarr[i][k].length != 1) {
          if (
            bigarr[i][k][0] == "0" ||
            (k != 5 && Number(bigarr[i][k]) > 255) ||
            Number(bigarr[i][5]) > 65535
          ) {
            valid = false;
            break;
          }
        }
      }
      if (valid) {
        res.push(bigarr[i][0]);
      }
    }
  }
  return res;
};
