const first = (any) => any[0];
const last = (any) => any[any.length - 1];
function kiss(any) {
  let arr = [];
  arr.push(any[0], any[any.length - 1]);
  return arr;
}
