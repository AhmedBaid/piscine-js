const getJSON = async (path, params) => {
    let searchParams
    let url = path
    if (params != undefined) {
        searchParams = new URLSearchParams(params).toString();
        url = path + "?" + searchParams
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();
        if (json.error) {
            throw Error(json.error)
        }
        return json.data
    } catch (error) {
        throw error
    }
}
