const pick = (obj,strORarr)=>{
    let res = {}
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            if(strORarr.include(key)){
                res[key]=obj[key]
            }
        }else{
            continue
        }
    }
    return res
}
const omit = (obj,strORarr)=>{
    let res = {}
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            if(!strORarr.include(key)){
                res[key]=obj[key]
            }
        }else{
            continue
        }
    }
    return res
}