const express = require('express');
// will need to get info off database
const pool = require('../modules/pool');
const router = express.Router();

// GET route to pull all movie data from database and send to client
router.get('/', (req, res) => {
    
    // query database to join movies and genres tables
    // WILL NEED THIS LATER! 
    // const queryText = `SELECT * FROM "movies"
    //     JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    //     JOIN "genres" ON "movies_genres".genres_id = "genres".id
    //     ORDER BY "movies".title ASC;`;
    const queryText = `SELECT * FROM "movies";`;

    pool.query(queryText)
        .then((result) => {
            console.log('GET from DB ', result.rows);
            // sends database information back to client in array
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
}); // End of GET 


router.get('/genres', (req, res) => {
    
    // query database to join movies and genres tables
    // WILL NEED THIS LATER! 
    // const queryText = `SELECT * FROM "movies"
    //     JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    //     JOIN "genres" ON "movies_genres".genres_id = "genres".id
    //     ORDER BY "movies".title ASC;`;
    const queryText = `SELECT * FROM "movies"
           JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
           JOIN "genres" ON "movies_genres".genres_id = "genres".id
           ORDER BY "movies".title ASC;`;

    pool.query(queryText)
        .then((result) => {
            console.log('GET from DB ', result.rows);
            // sends database information back to client in array
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
}); // End of GET 
module.exports = router;