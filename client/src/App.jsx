import React, {Component} from 'react';
import {Link, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import "./css/stylesheet.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        isLoggedIn: false,
    };

    componentDidMount() {
        // Checking if the user already has an access token
        fetch('/api/checkToken')
            .then(res => {
                this.setState({isLoggedIn: res.status === 200})
                console.log("isLoggedIn: " + this.state.isLoggedIn)
            });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Redirect to="/home"/>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="header">GameShop</h1>
                    <div className="root-container">
                        <div className="box-container">
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                            <Switch>
                                <Router path="/register" component={Register}/>
                                <Router path="/login" component={Login}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;