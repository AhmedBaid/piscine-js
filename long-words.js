const longWords = (arr) => {
  return arr.every((str) => {
    return typeof str == "string" && str.length >= 5;
  });
};

const oneLongWord = (arr) => {
  return arr.some((str) => {
    return typeof str == "string" && str.length >= 10;
  });
};

const noLongWords = (arr) => {
  return !arr.some((str) => {
    return typeof str == "string" && str.length >= 7;
  });
};

