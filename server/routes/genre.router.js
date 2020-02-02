const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route using junction table from SQL
router.get('/' (req, res) => {
    console.log('in genre GET router', req.params.id) // double check req.params?
    id= 
    let queryText = // Join statement from junction table here
})



module.exports = router;