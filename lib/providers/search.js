const axios = require("../axios");
const Provider = require("./provider");
const TMDBError = require("../tmdbError");

module.exports = class SearchProvider extends Provider {

    constructor(apiKey, language) {
        super("/search", apiKey, language);
    }

    async movie(query, opts = {}) {

        const searchQuery = {base: "movie", query: query};
        Object.assign(searchQuery, opts);

        const raw = await axios(this.buildSearchQuery(searchQuery));
        return new SearchResults(raw.data, raw.request.res.responseUrl);
    }
    async companies(opts) {

    }

    buildSearchQuery(opts) {
        return `${super.getBaseQuery(opts.base)}&query=${opts.query}`;
    }

}

class SearchResults {

    constructor(raw, url) {
        this.page = raw.page;
        this.results = raw.results;
        this.totalResults = raw.total_results;
        this.totalPages = raw.total_pages;
        this.url = url;
    }

}