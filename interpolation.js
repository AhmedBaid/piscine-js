const interpolation = (obj = { step: 0, start: 0, end: callback, duration: 0 }) => {
    let delay = obj.duration / obj.step
    let count = 1
    let x = (obj.end - obj.start) / obj.step
    let y = 0
    let wahd = obj.start
    let interval = setInterval(() => {
        if (count <= obj.step) {
            y += obj.duration / obj.step
            obj.callback([wahd, y])
            wahd += x
            count++
        } else {
            clearInterval(interval)
        }
    }, delay)
    return interval
}
