const TMDBClient = require("./index");

require("dotenv").config();

const tmdb = new TMDBClient(process.env.tmdbApiKey, "fr-FR");

test();

async function test() {
    try {
        const movie = await tmdb.search().movie("1001 pattes");
        console.log(movie.results[0].id);

        const hoc = await tmdb.find().external("tt1856010", "imdb_id");
        console.log(hoc);
        

    } catch (error) {
        console.error(error);
    }
    
}