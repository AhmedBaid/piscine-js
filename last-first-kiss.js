const first = (any) => any[0];
const last = (any) => any[any.length - 1];
function kiss(any) {
  let arr = [];
  arr.push(any[any.length - 1], any[0]);
  return arr;
}
