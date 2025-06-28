const hasCity = (country, arr) => {
  return function (city) {
    arr.array.forEach((element) => {
      if (element == city) {
        return city + " is a city from " + country;
      } else {
        return city + " is not a city from " + country;
      }
    });
  };
};
