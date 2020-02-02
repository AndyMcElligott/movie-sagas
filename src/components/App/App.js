import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';

///// IMPORT other components
import Home from '../Home/Home';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

// IMPORT CSS
import './App.css';

// MATERIAL UI IMPORTS
import{ 
  Button 
}from '@material-ui/core';

class App extends Component {
  // Renders the entire app on the DOM; 'home' screen
  render() {
    return (
      <Router>
        {/* Paths to other pages here */}
        <div className="routeDiv">
          <Route exact path = "/" Component={MovieList} />
          <Route path = "/details" Component={Details} />
          <Route path = "/edit" Component={Edit} />
        </div>
      </Router>
    );
  }
}

export default connect() (App);
