import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import other components
import MovieList from '../MovieList/MovieList'
import Edit from '../Edit/Edit';

// MATERIAL UI IMPORTS
import{ 
    Button 
}from '@material-ui/core';

class Details extends Component {

    render() {

        return (
            <>
                <Router>
                    <div className="detailsDiv">
                        <ul> Back to Movie List
                            {/* nav Link to MoviesList here */}
                            <Link to="/" component={MovieList} />
                        </ul> 
                        <ul> Edit Movie Details
                            {/* nav Link to edit page here */}
                            <Link to="/Edit" component={Edit} />
                        </ul> 
                    <div className="detailDiv"> 
                        {/* paths to other pages here */}
                            <Route exact path="/" component={MovieList} />
                            <Route exact path="/edit" component={Edit} />
                        {/* display movie title here; get from store */}
                            {this.props.reduxStore.details}
                        {/* display movie description here; get from store */}
                            {this.props.reduxStore.description}
                    </div>
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