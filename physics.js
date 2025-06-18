const getAcceleration = (obj) => {
  if (obj.f != undefined && obj.m != undefined) {
    return obj.f / obj.m;
  } else if (obj.Δv != undefined && obj.Δt != undefined) {
    return Δv / Δt;
  } else if (obj.t != undefined && obj.d != undefined) {
    return 2*d/Math.pow(t,2)
  } else {
    return "impossible";
  }
};

