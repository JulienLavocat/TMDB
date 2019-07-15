const Provider = require("./provider");
const axios = require("../axios");
const TMDBError = require("../tmdbError");

module.exports = class FindProvider extends Provider {

    constructor(apiKey, language) {
        super("/find", apiKey, language);
    }

    async external(id, source, opts) {

        if(!source)
            throw new TMDBError("105", "Source parameter is required");

        const findQuery = {base: id, source: source};
        Object.assign(findQuery, opts);
        
        console.log(this.buildQuery(findQuery));
        

        const raw = await axios(this.buildQuery(findQuery));
        console.log(raw);
        
        return new FindResults(raw.data);
    }

    buildQuery(query) {
        return `${super.getBaseQuery(query.base)}&external_source=${query.source}`;
    }

}

class FindResults {
    constructor(raw) {
        if (raw.movie_results.length > 0)
            this.movie = raw.movie_results;
        if (raw.person_results.length > 0)
            this.person = raw.person_results;
        if (raw.tv_results.length > 0)
            this.tv = raw.tv_results;
        if (raw.tv_episode_results.length > 0)
            this.tvEpisode = raw.tv_episode_results;
        if (raw.tv_season_results.length > 0)
            this.tvSeason = raw.tv_season_results;
    }
}