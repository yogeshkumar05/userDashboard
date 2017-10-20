import React, { Component } from 'react';
import AppContainer from './AppContainer';
import Login from './LoginPage';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginValid: false
        }
        this.updateLogin = this.updateLogin.bind(this);
    }

    updateLogin(value, user="") {
        this.user=user;
        this.setState({ isLoginValid: value });
    }

    render() {

        return (
            <div>    
                <div>
                    {this.state.isLoginValid ? <AppContainer user={this.user} updateLogin={this.updateLogin}/> : <Login updateLogin={this.updateLogin} />}
                </div>
            </div>)
    }
}


