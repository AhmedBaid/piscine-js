const findExpression = (nb) => {
  let str = "1 ";
  let val = 1;
  if (!iseven(nb)) {
    return undefined;
  }
  while (val < nb) {
    if (val + 4 == nb) {
      str += add4 + " ";
      return str;
    }
    let b = nb / val;
    if (!iseven(b)) {
      if (val + 4 == nb) {
        val = val + 4;
        str += add4 + " ";
        return str;
      } else if (val + 4 < nb) {
        val = val + 4;
        str += add4;
      }
    } else {
      if (val * 2 == nb) {
        val = val * 2;
        str += mul2 + " ";
        return str;
      } else if (val * 2 < nb) {
        val = val * 2;
        str += mul2 + " ";
      }
    }
  }
  return str;
};
const iseven = (nb) => nb % 2 === 0;
console.log(findExpression(8));
