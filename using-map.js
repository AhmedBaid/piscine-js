const citiesOnly = (arrOfobj) => {
  return arrOfobj.map((obj) => obj.city);
};

const upperCasingStates = (arr) => {
  return arr.map((str) =>
    str
      .split(" ")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
      .join(" ")
  );
};

const fahrenheitToCelsius = (arr) => {
  let regex = /-?\d+/;
  return arr.map((str) => {
    return str
      .match(regex)
      .map((str) => Math.floor((Number(str) - 32) * (5 / 9)) + "°C")
      .join("");
  });
};

const trimTemp = (arrOfobj) => {
  return arrOfobj.map((obj) => {
    return { ...obj, temperature: obj.temperature.replaceAll(" ", "") };
  });
};

const tempForecasts = (arrOfobj) => {
  let regex = /-?\d+/;
  return arrOfobj.map((obj) => {
    return (
      fahrenheitToCelsius(obj.temperature.match(regex)) +
      "elsius" +
      " in " +
      obj.city +
      ", " +
      obj.state
        .split(" ")
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
        .join(" ")
    );
  });
};
