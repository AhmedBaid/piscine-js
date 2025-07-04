const replica = (target, ...objects) => { 
  objects.forEach((obj) => {
    for (let key in obj) {
     const value = obj[key]
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {        
        replica(target[key],value)
      } else {
        target[key]=value
      }
    }
  });
  return target;
};
