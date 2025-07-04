const replica = (...objects) => {
  let res = {};
  objects.forEach((obj) => {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof RegExp) ) {
        if (!res[key] || typeof res[key] !== "object") {
          res[key] = {};
        }
        res[key] = replica(res[key], value);
      } else {
        res[key] = value;
      }
    }
  });
  return res;
};
