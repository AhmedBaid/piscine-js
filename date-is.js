const isValid = (date) => {
  if (typeof date == "string") {
    return false;
  }
  if (new Date(date) == "Invalid Date") {
    return false;
  }
  return true;
};
const isAfter = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  return d1.getTime() > d2.getTime();
};
const isBefore = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  return d1.getTime() < d2.getTime();
};
const isFuture = (date) => {
  let d = new Date();
  if (isValid(date)) {
    if (isAfter(date, d)) {
      return true;
    }
  }
  return false
};
const isPast = (date) => {
  let d = new Date();
  if (isValid(date)) {
    if (isBefore(date, d)) {
      return true;
    }
  }
  return false
};
