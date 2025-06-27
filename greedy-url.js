const getURL = (str) => {
  let regex = /(https|http):\/\/\w+\.[^\s]+/g;
  return str.match(regex);
};
const greedyQuery = (str) => {
  let res = [];
  let arr = getURL(str);
  let regex = /[?&][^=]+=[^&]+/g;
  for (let i = 0; i < arr.length; i++) {
    let greed = arr[i].match(regex) || [];
    if (greed.length >= 3) {
      res.push(arr[i]);
    }
  }
  return res;
};
const notSoGreedy = (str) => {
  let res = [];
  let arr = getURL(str);
  let regex = /[?&][^=]+=[^&]+/g;
  for (let i = 0; i < arr.length; i++) {
    let greed = arr[i].match(regex) || [];
    if (greed.length == 2 || greed.length == 3) {
      res.push(arr[i]);
    }
  }
  return res;
};


// const fahrenheitToCelsius = (arr) => {
//   let regex = /-?\d+/g;
//   return arr.map((str) => {
//     let arrregex = str.match(regex) || [];
//     console.log(arrregex);
    
//     return  arrregex.map(
//       (str) => Math.floor((Number(str) - 32) * (5 / 9)) + "°C"
//     ).join("");
//   });
// };
