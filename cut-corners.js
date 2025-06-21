const round = (nb) => {
  let k = 0;
  let bol = false;

  if (nb >= 68719476735) {
    nb -= 68719476735;
    bol = true;
  }
  const abs = Math.abs(nb);

  while (k < abs) {
    k++;
  }

  let diff = k - abs;
  let roundd = diff > 0.5 ? k - 1 : k;
  if (bol) {
    roundd += 68719476735;
  }
  return nb < 0 ? -roundd : roundd;
};

const ceil = (nb) => {
  let k = 0;
  let bol = false;
  if (nb >= 68719476735) {
    nb -= 68719476735;
    bol = true;
  }
  if (nb < 0) {
    while (k < Math.abs(nb)) {
      k++;
    }
    return -(k - 1);
  } else {
    while (k < Math.abs(nb)) {
      k++;
    }
    if (bol) {
      k += 68719476735;
    }
    return k;
  }
};

const floor = (nb) => {
  let k = 0;
  let bol = false;
  if (nb >= 68719476735) {
    nb -= 68719476735;
    bol = true;
  }
  if (nb < 0) {
    while (k < Math.abs(nb)) {
      k++;
    }
    return -k;
  } else {
    while (k < Math.abs(nb)) {
      k++;
    }
    if (bol) {
      k += 68719476735;
    }
    let diff = k - nb;
    if (diff == 0) {
      return k;
    } else {
      return k - 1;
    }
  }
};
const trunc = (nb) => {
  return nb < 0 ? ceil(nb) : floor(nb);
};
