const all = async (obj) => {
    let newobj = {...obj}
    for (const value in newobj) {
        newobj[value] = await newobj[value]
    }
    return newobj
}
