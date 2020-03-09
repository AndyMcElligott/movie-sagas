Movie Sagas
This project was an individual weekend assignment aimed at giving us practice handling asynchronous action using Redux-Saga and javascript generator functions.

Description
The application displays a list of movies and their respective descriptions. Upon clicking on a movie's poster, the user is taken to a details page that has more information about the selected movie. On this page, the user has the option to edit these details. The updated details will appear upon page refresh.

Technologies Used
This app is built with a React.js front end, an Express server, and a PostreSQL database. The front end uses React-Redux to store variables used accross components, and Redux-Saga to handle asynchronous actions. The server implements a REST API to handle http requests and interact with the database. The database consists of a "movies" table and a "genres" table that have a many-to-many relationship, represented by a "movies_genres" table.
