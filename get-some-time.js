function firstDayWeek(nb, year) {
  let d = new Date("01-01-0001");
  d.setFullYear(year);
  d.setDate(nb * 7 - 6);
  while (d.getDate() !== 1 && d.getDay() !== 1) {
    d.setDate(d.getDate() - 1);
  }

  return String(d.getDate()).padStart(2, "0") +"-" +String(d.getMonth() + 1).padStart(2, "0") +"-" +year ;
}
