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
            // sends database information back to client in array
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
}); // End of GET 


router.get('/genres', (req, res) => {
    

    const queryText = `SELECT * FROM "movies"
           JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
           JOIN "genres" ON "movies_genres".genres_id = "genres".id
           ORDER BY "movies".title ASC;`;

    pool.query(queryText)
        .then((result) => {
            // sends database information back to client in array
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
}); // End of GET 

// PUT route to pull 
router.put('/edit/:id', (req, res) => {
    const movieId = req.params.id;
    const newData = req.body;
    const queryText = `UPDATE "movies"
           SET "title" = $1, "description" = $2
           WHERE "id" = $3;`;

    pool.query(queryText, [newData.title, newData.description, movieId])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
});
module.exports = router;