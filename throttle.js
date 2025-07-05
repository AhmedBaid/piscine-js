const throttle = (callback, delay = 0) => {
    let khdama = false
    return (...args) => {
        if (!khdama) {
            callback(...args)
            khdama = true
        }
        setTimeout(() => {
            khdama = false
        }, delay)
    }
}
const opThrottle = (callback, delay = 0, options = { trailing: false, leading: false }) => {
    let khdama = false
    return (...args) => {
        if (!khdama) {
            if (options.leading) {
                callback(...args)
            }
            khdama = true
            setTimeout(() => {
                if (!options.leading && options.trailing) {
                    callback(...args)
                }
                khdama = false
            }, delay)
        }
    }
}