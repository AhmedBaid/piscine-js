const invert = (obj) => {
  let invert = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      invert[obj[key]] = key;
    } else {
      continue;
    }
  }
  return invert;
};