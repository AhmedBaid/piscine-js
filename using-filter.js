const filterShortStateName = (arr) => {
  return arr.filter((str) => str.length < 7);
};

const filterStartVowel = (arr) => {
  let regex = /a|o|u|i|e/i;
  return arr.filter((str) => regex.test(str[0]));
};

const filter5Vowels = (arr) => {
  let regex = /[aouie]/gi;
  return arr.filter((str) => {
    let res = str.match(regex) || [];
    return res.length >= 5;
  });
};

const filter1DistinctVowel = (arr) => {
      return arr.filter((str) => {
    let set = new Set(str.toLowerCase());
    let arr1 = [...set];
    let strr = arr1.join("");
    let regex = /[aouie]/g;
    let res = strr.match(regex) || [];
    return res.length == 1;
  });
};

const multiFilter = (arrOfobj) => {
  return arrOfobj.filter((obj) => {
    let regx1=/^[aeiou]/i
    let regx2=/[aeiou]/i
    return (
      obj.capital.length >= 8 &&
      !regx1.test(obj.name) &&
      regx2.test(obj.tag) &&
      obj.region !== "South"
    );
  });
};
