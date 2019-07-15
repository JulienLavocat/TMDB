const axios = require("../axios");

const BASE_URL = "https://api.themoviedb.org/3/search";

module.exports = class SearchProvider {

    constructor(apiKey, language) {
        this.apiKey = apiKey;
        this.language = language;
    }

    async movie(query, opts = {}) {

        const searchQuery = {query: query};
        Object.assign(searchQuery, opts);

        const raw = await axios(`${BASE_URL}/movie?${this.buildSearchQuery(searchQuery)}`);
        return new SearchResults(raw.data);
    }
    async companies(opts) {

    }

    buildSearchQuery(opts) {
        return `api_key=${this.apiKey}&query=${opts.query}&language=${this.language}`;
    }

}

class SearchResults {

    constructor(raw) {
        this.page = raw.page;
        this.results = raw.results;
        this.totalResults = raw.total_results;
        this.totalPages = raw.total_pages;
    }

    nextPage() {
        //TODO: make next page request
    }

}