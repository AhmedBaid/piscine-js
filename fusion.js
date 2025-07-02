const fusion = (...objects) => {
  let res = objects[0];
  objects.forEach((obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key]) && Array.isArray(res[key])) {
          res[key] = res[key].concat(obj[key]);
        } else if (typeof res[key] == "string" && typeof obj[key] == "string") {
          res[key] = res[key].concat(" " + obj[key]);
        } else if (typeof res[key] == "number" && typeof obj[key] == "number") {
          res[key] = res[key] + obj[key];
        } else if (typeof res[key] == "object" && typeof obj[key] == "object") {
          fusion(res[key], obj[key]);
        } else {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
};


