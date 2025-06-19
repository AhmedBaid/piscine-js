const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => [...set];
const setToStr = (set) => {
  let arr = [...set];
  return arr.join("");
};
const strToArr = (str) => str.split("");
const strToSet = (str) => {
  let arr = str.split("");
  return new Set(arr);
};
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.assign({},arr)
const strToObj = (str) => {
  let object = {};
  const arrays = Object.entries(str);
  for (const [key, value] of arrays) {
    object[key] = value;
  }
  return object;
};
const superTypeOf = (type) => {
  if (type instanceof Map) {
    return "Map";
  } else if (type instanceof Set) {
    return "Set";
  } else if (Array.isArray(type)) {
    return "Array";
  } else if (type === null) {
    return "null";
  } else {
    if (type !== undefined) {
      let type1 = typeof type;
      return type1.charAt(0).toUpperCase() + type1.slice(1).toLowerCase();
    }
    return "undefined";
  }
};
