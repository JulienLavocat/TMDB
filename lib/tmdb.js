const providers = require("./providers");
const TMDBError = require("./tmdbError")

class TMDB {

    constructor(apiKey, language = "en-US") {

        if(!language.match("([a-z]{2})-([A-Z]{2})"))
            throw new TMDBError(100, "Invalid language format, must be a valid, four letters ISO 639-1");

        this.providers = {};
        Object.entries(providers).forEach(entry => {
            this.providers[entry[0]] = new entry[1](apiKey, language);
        });

    }

    find() {
        return this.providers.find;
    }
    search() {
        return this.providers.search;
    }

}

module.exports = TMDB;