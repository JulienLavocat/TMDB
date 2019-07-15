const axios = require("axios").default;
const TMDBError = require("./tmdbError");

axios.defaults.baseURL = "https://api.themoviedb.org/3/"

module.exports = async function (url, config) {
    url = encodeURI(url);

    try {
        const result = await axios.get(url, config);
        return result;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401)
                throw new TMDBError(401, "Invalid API Key")

            if (error.response.status === 404) {
                //console.log(error.response);
                
                throw new TMDBError(404, "Resource not found");
            }


        } else if (error.request) {
            throw new TMDBError(103, "No response received");
        } else {
            throw error;
        }
    }

}