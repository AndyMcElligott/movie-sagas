import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import MovieList from '../MovieList/MovieList'
import './App.css';

// MATERIAL UI IMPORTS
import{ 
  Button 
}from '@material-ui/core';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Home />
        <MovieList />
      </div>
    );
  }
}

export default connect() (App);
