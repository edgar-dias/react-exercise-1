import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'react-user'
    };

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput value={this.state.username} changed={this.usernameChangeHandler}></UserInput>
                <UserOutput username={this.state.username}></UserOutput>
            </div>
        );
    }
}

export default App;
