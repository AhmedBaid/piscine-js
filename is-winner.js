const isWinner = async (country) => {
    try {
        let res = await db.getWinner(country)

        if (res.continent != "Europe") {
            return `${country} is not what we are looking for because of the continent`
        }

        let result = await db.getResults(res.id)

        if (result.length < 3) {
            return `${country} is not what we are looking for because of the number of times it was champion`

        }

        let years = result.map((res) => {
            return res.year
        }).join(", ")
        let results = result.map((res) => {
            return res.score
        }).join(", ")

        return `${country} won the FIFA World Cup in ${years} winning by ${results}`
    } catch (error) {
        return `${country} never was a winner`
    }
}
