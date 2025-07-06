const retry = (count, callback) => {
    let ctr = 0
    let err
    return async function (...params) {
        while (ctr <= count) {
            try {
                return await callback(...params)
            } catch (error) {
                ctr++
                err = error
            }
        }
        if (ctr >= count) {
            throw err;
        }
    }
}

const timeout = (delay, callback) => {
    return (...params) => {
        let reject = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("timeout"))
            }, delay)
        })
        return Promise.race([callback(...params), reject])
    }
}