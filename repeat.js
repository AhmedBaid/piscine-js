const repeat = (str, nb) => {
    if (nb <= 0) return ""
    if (nb == 1) return str
    str += repeat(str, nb - 1)
}
