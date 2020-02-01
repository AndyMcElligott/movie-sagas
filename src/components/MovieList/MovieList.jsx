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
            type: 'SET_MOVIES'
        })
    }

    // func for click event to bring up description


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