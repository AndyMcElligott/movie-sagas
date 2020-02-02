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

// edit movie description; PUT route
router.put('/:id', (req, res) => {

    console.log('in router PUT, updating description', req.params.id)

    let titleUpdate = req.body.title;  //double check final key
    let descriptionUpdate = req.body.description;  //double check final key
    let id = req.body.id;
    
    // SQL query to update DB with user input here, sanitzie DB
    let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    pool.query(queryText, titleUpdate, descriptionUpdate, id) // can I pass this many items through pool.query?
        .then(() => 
            {res.sendStatus(200)}
        )
        .catch((error) => 
        
            {console.log('error in router PUT', error)
            res.sendStatus(500)}
        )
})

module.exports = router;