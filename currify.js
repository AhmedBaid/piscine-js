const currify = (func) => {
  let curried = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (next) => curried(...args, next);
    }
  };
  return curried;
};
