const pronoun = (str) => {
  let res = {};
  const pronoun = ["i", "you", "he", "she", "it", "they", "we"];
  let split = str.split("\n");
  let arr = [];
  for (const ele of split) {
    arr.push(...ele.split(" "));
  }
  let reg = /\w+/g;
  for (let i = 0; i < arr.length; i++) {
    if (pronoun.includes(arr[i].toLowerCase())) {
      if (!res[arr[i].toLowerCase()]) {
        res[arr[i].toLowerCase()] = { word: [], count: 0 };
      }
      res[arr[i].toLowerCase()].count++;
      if (!pronoun.includes(arr[i + 1]) && i!= arr.length-1) {
        let match = arr[i + 1].match(reg) || [];
        res[arr[i].toLowerCase()].word.push(...match);
      }
    }
  }
  return res;
};
