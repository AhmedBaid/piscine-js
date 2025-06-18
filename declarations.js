const escapeStr = '`\\/"\''
const arr = [4, "2"];
Object.freeze(arr);
const obj = { str: "hello", num: 500, bool: true, undef: undefined };
Object.freeze(obj);
const nested = {
  arr: Object.freeze([4, undefined, "2"]),
  obj: Object.freeze({ str: "hello", num: 500, bool: false }),
};
Object.freeze(nested);