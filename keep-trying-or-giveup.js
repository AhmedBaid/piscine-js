const retry = (count, callback) => {
    let ctr = 0
    let dima = true
    return async function (...params) {
        while (dima) {
            try {
                return await callback(...params)
            } catch (error) {
                ctr++
                if (ctr > count) {
                    throw error;
                }
            }
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