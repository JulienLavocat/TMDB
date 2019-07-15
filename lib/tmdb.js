const providers = require("./providers");

class TMDB {

    constructor(apiKey, language = "en-US") {
        this.apiKey = apiKey;

        if(!language.match("([a-z]{2})-([A-Z]{2})"))
            throw new TMDBError(100, "Invalid language format, must be a valid, four letters ISO 639-1");

        this.language = language;
    }

    //FIND requests

    find(id) {

    }

    //SEARCH requests

    searchCompany(company) {
        return providers.search.company();
    }
    //TODO: add search parameters => page, include_adult, region, year, etc...
    searchMovie(name) {
        return providers.search.movie({
            query: name,
            language: this.language
        });
    }

}

exports = TMDB;