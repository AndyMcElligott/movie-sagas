import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';


class Edit extends Component {

    // locally store user inputs 
    state = {
        id : this.props.reduxStore.id,
        title : this.props.reduxStore.title,
        description : this.props.reduxStore.description
    }

    // dispatch payload to Redux Store


    // capture inputs on save event
    newDetails = () => {
        this.props.dispatch({
            type: 'EDIT_INFO',
            payload: this.state
        })
    }

    render() {

        return (
            <Router>
                <div>
                    <ul>
                        {/* set up button paths */}
                        <ul>
                            {/* if changes want to be abandoned then route back to details page */}
                            <Link to="/details"> Cancel Edit </Link>
                        </ul>
                        <ul>
                            {/* save; send data to details to update */}
                            <Link to="/details" onClick={this.newDetails}> Save Changes</Link>
                        </ul>
                    </ul>
                </div>
                <div className="editTextArea">
                    {/* route here to /details ? */}
                    <span>
                        <textarea 
                            className = "editTextTitle"
                            onChange={(event) => this.setDetails(event, 'title')}>
                            {/* display text */}
                            {this.props.reduxStore.title}
                        </textarea>
                    </span>
                    <span>
                        <textarea 
                            className = "editTextDescription"
                            onChange={(event) => this.setDetails(event, 'description')}>
                            {/* display text */}
                            {this.props.reduxStore.description}
                        </textarea>
                    </span>
                </div>
            </Router>

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Edit);