const triangle = (s, nb) => {
  let str = "";
  for (let i = 1; i <= nb; i++) {
    if (i == nb) {
      str += s.repeat(i);
    } else {
      str += s.repeat(i) + "\n";
    }
  }
  return str;
};
