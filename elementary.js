function multiply(a, b) {
    let res = 0
    if (b < 0) {
        a = -a
        b = -b
    }
    for (let i = 0; i < b; i++) {
        res += a
    }

    return res
}

function divide(a, b) {
    let count = 0
    let sign = 1
    if (a > 0 && b < 0) {
        sign = -1
        b = -b
    }
    if (a < 0 && b > 0) {
        sign = -1
        a = -a
    }
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    while (a >= b) {
        a -= b
        count++
    }
    return multiply(count, sign)
}


function modulo(a, b) {
    let sign = 1
    if (a < 0 && b > 0) {
        sign = -sign
        a = -a
    }
    if (a < 0 && b < 0) {
        sign = -sign
        a = -a
        b = -b
    }
    const mod = a - multiply(divide(a, b), b)
    return multiply(mod,sign)
}
