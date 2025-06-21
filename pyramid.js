const pyramid = (s, nb) => {
  let str = "";
  for (let i = 0; i < nb; i++) {
    let spaces = " ".repeat((nb - 1 - i)*s.length);
    let word = s.repeat(i * 2 + 1);
    if (i == nb - 1) {
      str += spaces + word;
    } else {
      str += spaces + word + "\n";
    }
  }
  return str;
};
