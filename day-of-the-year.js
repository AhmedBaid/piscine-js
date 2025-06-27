const dayOfTheYear = (date) => {
  let d = new Date("0001-01-01");
  d.setUTCFullYear(date.getUTCFullYear());
  const diff = date - d;
  const oneDay = 1000 * 60 * 60 * 24;
  let res = Math.floor(diff / oneDay) + 1;
  return res;
};
