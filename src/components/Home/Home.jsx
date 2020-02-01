import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'

// import './Home.css'

// MATERIAL UI IMPORTS
import Select from '@material-ui/core/Button';
import Option from '@material-ui/core/Button';

class Home extends Component {

    render() {

        return (
            <div>
                <MovieList />
            </div>
        )
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Home);