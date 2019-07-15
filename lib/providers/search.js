const axios = require("axios").default;

const BASE_URL = "https://api.themoviedb.org/3";

exports.company = function () {

}

exports.movie = function(opts) {
    return axios.get(`${BASE_URL}/search/movie?${buildSearchQuery(opts)}`);
}

function buildSearchQuery(opts) {
    //TODO: add more search opts
    return `query=${opts.query}&language=${opts.language}`;
}