let vowels = /a|e|i|o|u|A|E|I|O|U/g;
const vowelDots = (params) => {
  let str = "";
  for (let i = 0; i < params.length; i++) {
    if (params[i].match(vowels) === null) {
      str += params[i];
    } else {
      str += params[i] + ".";
    }
  }
  return str;
};
console.log(vowelDots("a"));
