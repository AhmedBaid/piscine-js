const round = (nb) => {
    let k = 0
    while (k < Math.abs(nb)) {
        k++
    }
    
    let re = k - nb
    if (re > 0.5) {
        return k - 1
    } else {
        return k
    }
}
