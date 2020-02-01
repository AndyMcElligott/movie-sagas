import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import{ 
    Button 
}from '@material-ui/core';

class Details extends Component {


    render() {

        return (

            
        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(GifsList);