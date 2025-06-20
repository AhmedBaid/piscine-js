const slice = (strORarr, start, end) => {
    let arr = []
    if (end == undefined) {
        if (start < 0) {
            start += strORarr.length
        }
        for (let i = start; i < strORarr.length; i++) {
            arr.push(strORarr[i])
        }
    } else {
        if (start < 0) {
            start += strORarr.length
        }
        if (end < 0) {
            end += strORarr.length
        }
        for (let i = start; i < end; i++) {
            arr.push(strORarr[i])
        }
    }
    return typeof strORarr === "string" ? arr.join("") : arr
}
