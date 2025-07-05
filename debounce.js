const debounce = (callback, delay = 0) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
};


const opDebounce = (callback, delay, options = { leading: false }) => {
    let timeout
    let khdama = false
    return (...args) => {
        if (options.leading) {
            if (!khdama) {
                callback(...args)
                khdama = true
            }
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                khdama = false
            }, delay)

        } else {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                callback(...args)
            }, delay)
        }
    }
}
