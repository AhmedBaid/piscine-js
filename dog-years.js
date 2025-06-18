function dogYears(planet, age) {
  const dogAge = (age / 31557600) * 7;
  if (planet == "earth") {
    return Number(dogAge.toFixed(2));
  } else if (planet == "mercury") {
    return Number((dogAge / 0.2408467).toFixed(2));
  } else if (planet == "venus") {
    return Number((dogAge / 0.61519726).toFixed(2));
  } else if (planet == "mars") {
    return Number((dogAge / 1.8808158).toFixed(2));
  } else if (planet == "jupiter") {
    return Number((dogAge / 11.862615).toFixed(2));
  } else if (planet == "saturn") {
    return Number((dogAge / 29.447498).toFixed(2));
  } else if (planet == "uranus") {
    return Number((dogAge / 84.016846).toFixed(2));
  } else if (planet == "neptune") {
    return Number((dogAge / 164.79132).toFixed(2));
  }
}
