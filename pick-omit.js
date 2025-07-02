const pick = (obj, strORarr) => {
  let res = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(strORarr)) {
        if (strORarr.includes(key)) {
          res[key] = obj[key];
        }
      }else{
        if (strORarr==key) {
          res[key] = obj[key];
        }
      }
    } 
  }
  return res;
};
const omit = (obj, strORarr) => {
  let res = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(strORarr)) {
        if (!strORarr.includes(key)) {
          res[key] = obj[key];
        }
      }else{
        if (strORarr!=key) {
          res[key] = obj[key];
        }
      }
    } 
  }
  return res;
};
