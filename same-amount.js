const sameAmount = (str, regex1, regex2) => {
  regex1 = new RegExp(regex1, "g");
  regex2 = new RegExp(regex2, "g");
  let len1 = str.match(regex1) !== null ? str.match(regex1) : [];
  let len2 = str.match(regex2) !== null ? str.match(regex2) : [];
  return len1.length == len2.length;
};
