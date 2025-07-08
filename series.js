const series = async (arr) => {
    let al = []
    for (let i = 0; i < arr.length; i++) {
        const value = await arr[i]()

        al.push(value)
    }
    return al
}