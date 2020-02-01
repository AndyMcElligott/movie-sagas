const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

// Route includes
const movieRouter = require('./routes/movie.router')

/** ---------- ROUTES ---------- **/
app.use('/api/movies', movieRouter)

// Route includes


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});