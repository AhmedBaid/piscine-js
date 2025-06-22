const vowelDots = (params) => {
  let str = "";
  let regex = /a|e|i|o|u/g;
  for (let i = 0; i < params.length; i++) {
    if (params[i].match(regex) === null) {
      str += params[i];
    } else {
      str += params[i] + ".";
    }
  }
  return str;
};
console.log(vowelDots("something"));
