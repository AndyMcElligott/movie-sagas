import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className= "moviesH1">Current Selection Of Movies</h1>
                {/* <h3>{this.props.month}</h3> */}
            </header>
        )
    }
}

export default Header;