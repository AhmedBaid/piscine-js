const countLeapYears = (date) => {
  let d = new Date(date);
  let year = d.getFullYear();
  let count=0
  for (let i = 1; i < year; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        count++
    }
  }
  return count
};
