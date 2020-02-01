import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
// import from Edit once created

// MATERIAL UI IMPORTS
import{ 
    Button 
}from '@material-ui/core';

class Details extends Component {

    render() {

        return (
            <>
                <Router>
                    {/* nav Link to movies here */}
                    {/* nav Link to edit page here */}

                    {/* replace div with Card when styling */}
                    <div className="detailDiv"> 

                        {/* display movie title here; get from store */}

                        {/* display movie description here; get from store */}
                    </div>
                </Router>
            </>
        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Details);