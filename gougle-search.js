const queryServers = (serverName, query) => {
    let first = getJSON(`/${serverName}?q=${query}`)
    let last = getJSON(`/${serverName}_backup?q=${query}`)
    return Promise.race([first, last])
}
async function gougleSearch(query) {
    const reject = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 80)
    );

    const result = Promise.all([
        queryServers("web", query),
        queryServers("image", query),
        queryServers("video", query),
    ]).then(([web, image, video]) => ({
        web,
        image,
        video,
    }))
    return Promise.race([result, reject])
}