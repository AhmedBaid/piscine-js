const matchCron = (str, date) => {
  let d = new Date(date);
  let arr = [];
  arr.push(d.getMinutes(),d.getHours(),d.getDate(),d.getMonth()+1,d.getDay())
  let cron = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (cron[i] == "*") {
      continue;
    }
    if (String(cron[i]) !== String(arr[i])) {
      return false;
    }
  }
  return true;
};
