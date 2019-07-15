const TMDBClient = require("./index");

require("dotenv").config();

const tmdb = new TMDBClient(process.env.tmdbApiKey, "fr-FR");

test();

async function test() {
    try {
        const movie = await tmdb.search().movie("1001 pattes");
        console.log(movie);
    } catch (error) {
        console.error(error);
    }
    
}