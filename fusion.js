const fusion = (...objects) => {
  let res = objects[0];

  for (let i = 1; i < objects.length; i++) {
    for (let key in objects[i]) {
      if (objects[i].hasOwnProperty(key)) {
        if (Array.isArray(objects[i][key]) && Array.isArray(res[key])) {
          console.log(1);
          res[key] = res[key].concat(objects[i][key]);
        }else if(typeof res[key] == "string" && typeof objects[i][key] == "string"){
          res[key] = res[key].concat(" "+objects[i][key]);
        }else if(typeof res[key] == "number" && typeof objects[i][key] == "number"){
          res[key] = res[key]+objects[i][key];
        }else if(typeof res[key] == "object" && typeof objects[i][key] == "object"){
          fusion(res[key],objects[i][key])
        }else{
          res[key]=objects[i][key]
        }
      }
    }
  }
  return res;
};

