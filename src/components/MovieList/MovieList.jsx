import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import './MovieList.css';

// MATERIAL UI IMPORTS
import{ 
    Button 
}from '@material-ui/core';


class MovieList extends Component {

    // state = {
    //     queryText: ''
    // }

    componentDidMount(){
        this.getAllMovies();
    }

    // server GET request to display movies from DB on DOM
    getAllMovies = () => {
        this.props.dispatch({
            type: 'GET_MOVIES'  //  should not be SET_MOVIES to match with index, create new
        })
    }

    // func for click event to bring up description
    movieInfo = (action) => {
        console.log(action)
        this.props.dispatch({
            type: 'MOVIE_INFO',
            payload: action // double check this is the correct payload on testing
        })
    }


    render() {
        return(
            <div className="moviesForDom">
                <h3>Movies</h3>
                {this.props.reduxStore.movies.map(item => 
                    <ul>
                        <img src={item.poster} alt="" />
                        <br/>
                    </ul>)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(MovieList);