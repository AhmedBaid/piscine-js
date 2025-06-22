const sameAmount = (str, regex1, regex2) => {
  regex1 = new RegExp(regex1.source, "g");
  regex2 = new RegExp(regex2.source, "g");
  let len1 = str.match(regex1);
  let len2 = str.match(regex2);
  if (len1.length == len2.length) {
    return true;
  }
  return false;
};
