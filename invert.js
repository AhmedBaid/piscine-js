const invert = (obj) => {
  let invert = {};
  for (let key in obj) {
    invert[obj[key]] = key;
  }
  return invert;
};
