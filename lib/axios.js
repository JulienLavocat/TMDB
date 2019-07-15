const axios = require("axios").default;
const TMDBError = require("./tmdbError");

module.exports = async function (url, config) {
    url = encodeURI(url);

    try {
        const result = await axios.get(url, config);
        return result;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401)
                throw new TMDBError(401, "Invalid API Key")

        } else if (error.request) {
            throw new TMDBError(103, "No response received");
        } else {
            throw error;
        }
    }

}