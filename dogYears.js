function dogYears(planet, age) {
  const dogAge = (age / 31557600) * 7;
  if (planet == "earth") {
    return dogAge.toFixed(2);
  } else if (planet == "mercury") {
    return (dogAge / 0.2408467).toFixed(2);
  } else if (planet == "venus") {
    return (dogAge / 0.61519726).toFixed(2);
  } else if (planet == "mars") {
    return (dogAge / 1.8808158).toFixed(2);
  } else if (planet == "jupiter") {
    return (dogAge / 11.862615).toFixed(2);
  } else if (planet == "saturn") {
    return (dogAge / 29.447498).toFixed(2);
  } else if (planet == "uranus") {
    return (dogAge / 84.016846).toFixed(2);
  } else if (planet == "neptune") {
    return (dogAge / 84.016846).toFixed(2);
  }
}
