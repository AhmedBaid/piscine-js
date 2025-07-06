const queryServers = (serverName, q) => {
    getJSON(`/${serverName}?${q}=hello+world`)
    getJSON(`/${_backup}?${q}=hello+world`)
}
