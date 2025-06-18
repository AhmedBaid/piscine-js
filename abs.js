const isPositive = (nb) => nb > 0;
const abs = (nb) => {
  if (!isPositive(nb) && nb != 0) {
    return -nb;
  } else {
    return nb;
  }
};
