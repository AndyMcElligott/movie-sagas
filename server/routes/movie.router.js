const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all movies from DB
router.get('/', (req, res) => {
        const queryText = 'SELECT * FROM "movies";'
        console.log('in movie router.get', req.body)
    pool.query(queryText)
        .then( result => {
        console.log(result.rows)
            res.send(result.rows)
    })
        .catch( error => {
        console.log('error in movie GET', error)
            res.sendStatus(500);
    })
  })






module.exports = router;