const isFriday = (date) => {
  let d = new Date(date);
  let isfriday = d.getDay();
  return isfriday == 5;
};
const isWeekend = (date) => {
  let d = new Date(date);
  let isfriday = d.getDay();
  return isfriday == 0 || isfriday == 6;
};
const isLeapYear = (date) => {
  let year = date.getFullYear(date);
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
const isLastDayOfMonth = (date) => {
  const d = new Date(date);
  const lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  return d.getDate() === lastDayOfMonth.getDate();
};

