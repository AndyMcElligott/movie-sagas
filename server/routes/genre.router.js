const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route using junction table from SQL
router.get('/', (req, res) => {
    console.log('in genre GET router', req.query.id) // double check req.params?
    id= req.query.id;
    let queryText = // Join statement from junction table here
    `SELECT "movies".title, "genres".name from "movies"
    JOIN "movies_genres" on "movies".id = "movies_genres".movies_id
    JOIN "genres" on "movies_genres".genres_id = "genres".id
    WHERE "movies".id = $1;`  
    pool.query(queryText, id)
    .then(result => {
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('Error in GET genre', error);
        res.sendStatus(500)
    })
})

module.exports = router;