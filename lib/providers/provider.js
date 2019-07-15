class Provider {

    constructor(base, apiKey, language) {
        this.base = base;
        this.apiKey = apiKey;
        this.language = language;
    }

    getBaseQuery(url) {
        return `${this.base}/${url}?api_key=${this.apiKey}&language=${this.language}`;
    }

}

module.exports = Provider;