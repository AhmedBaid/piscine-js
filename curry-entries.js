const defaultCurry = (obj1) => {
  let res = {};
  return function (obj2) {
    res = { ...obj1, ...obj2 };
    return res;
  };
};

const mapCurry = (func) => {
  let res = {};
  return function (obj) {
    for (let key in obj) {
      let [newkey, newvalue] = func([key, obj[key]]);
      res[newkey] = newvalue;
    }
    return res;
  };
};

const reduceCurry = (func) => {
  return function (obj, acc) {
    for (const key in obj) {
      acc = func(acc, [key, obj[key]]);
    }
    return acc;
  };
};

const filterCurry = (func) => {
  let res = {};
  return function (obj) {
    for (const key in obj) {
      if (func([key, obj[key]])) {
        res[key] = obj[key];
      }
    }
    return res;
  };
};
const reduceScore = (obj, acc = 0) => {
  return reduceCurry((acc, [_, value]) => {
    if (value.isForceUser) {
      acc += value.pilotingScore + value.shootingScore;
    }
    return acc;
  })(obj, acc);
};

const filterForce = (obj) => {
  return filterCurry(([_, value]) => {
    return value.isForceUser && value.shootingScore >= 80;
  })(obj);
};
const mapAverage = (obj) => {
  return mapCurry(([k, v]) => {
    obj[k]["averageScore"] = (obj[k]["pilotingScore"] + obj[k]["shootingScore"]) / 2;
    return [k, obj[k]];
  })(obj);
};
