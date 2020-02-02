import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'

//////////////////////////////////////////////////////////////////////////////////////

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMovies)
    yield takeEvery ('EDIT_INFO', editInfo)
    yield takeEvery ('GET_GENRES', getGenres)
}

/////// SAGA's
// SAGA for getting movies
function* getMovies(action) {
    let response = yield axios.get('/api/movies')
    console.log(response.data)
    yield put({ 
        type: 'SET_MOVIES',
        payload: response.data
    })
}

// SAGA for editted movie details by ID, PUT
function* editInfo(action) {
    let response = yield axios.put(`/api/movies/:{id}`, action.payload)
    console.log(response.data)
}

// SAGA for junction table to show genres on details page
function* getGenres(action) {
    yield put({
        type: 'MOVIE_DESCRIPTION',
        payload: action.payload
    })
    // get updated info
    let response = yield axios.get(`api/genres/id={id}`)
    yield put({
        type: 'SET_GENRES',
        payload: response.data
    })
}

////// Reducers
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store changed details info from Edit
const edit = (state= [], action) => {
    switch (action.type) {
        // if editted return something else
        case 'EDIT_INFO' :
            return action.payload;
        // if changes are canceled return original data from DB
        case 'MOVIE_DESCRIPTION' :
            return action.payload;
        default:
            return state;        
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        edit
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
