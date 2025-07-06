const interpolation = (obj = { step: 0, start: 0, end: callback, duration: 0 }) => {
    let delay = obj.duration / obj.step
    let count = 1
    let x = (obj.end - obj.start) / obj.step
    let y = obj.duration / obj.step
    let wahd = obj.start
    let joj = 0
    let interval = setInterval(() => {
        if (count <= obj.step) {
            joj += y
            obj.callback([wahd, joj])
            wahd += x
            count++
        } else {
            clearInterval(interval)
        }
    }, delay)
    return interval
}
