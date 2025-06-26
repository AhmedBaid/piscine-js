const addWeek = (date) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  let d = new Date("0001-01-01");
  let k = new Date(date);
  let op = k - d;
  let day = (op / (1000 * 60 * 60 * 24)) % 14;
  return weekDays[day];
};
const timeTravel = (object) => {
  let date = object.date;
  date.setHours(object.hour);
  date.setMinutes(object.minute);
  date.setSeconds(object.second);
  return date;
};
