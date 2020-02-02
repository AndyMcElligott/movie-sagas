// IMPORT BOILER PLATE
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './MovieList.css';
import Header from '../Header/Header';

// MATERIAL UI IMPORTS
// import Container from '@material-ui/core/Container';

class MovieList extends Component {

    // get movies from DB on page load
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
            // <Container fixed>
            <div className="moviesForDom">
                <Header/>
                {/* <h1 className= "moviesH1">Current Selection Of Movies</h1> */}
                {/* render pics, titles, on the DOM, make clickable to route to details page */}
                {this.props.reduxStore.movies.map(action => 
                    <>
                        <ul> 
                            {/* include a link to edit page here */}
                            <Link to="/details">
                                {/* when styling, use material UI to turn img into card? */}
                                <img 
                                    src={action.poster} 
                                    alt=""
                                    value={action.id}
                                    onClick={(event) => this.movieInfo(action)} />
                                
                                <br/>
                            </Link>
                        </ul>
                            <div className= "movieInfo">
                                <h3>{action.title}</h3>
                                <p>{action.description}</p>
                            </div>
                    </>
                    )}
            </div>
            // </Container>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(MovieList);