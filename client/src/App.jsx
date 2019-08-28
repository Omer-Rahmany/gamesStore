import React, { Component } from 'react';
import { Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from  "./Login";
import Register from  "./Register";
import "./css/stylesheet.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    // initialize our state
    state = {
        isLoggedIn: false,
        data: [],
        id: 0,
        isLoginOpen: true,
        isRegisterOpen: false
    };

    componentDidMount() {
        //GET message from server using fetch api
        fetch('/api/checkToken')
            .then(res => {
                this.setState({isLoggedIn: res.status === 200})
                console.log("isLoggedIn: " + this.state.isLoggedIn)
            });
    }

    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Redirect to="/home" />
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
                                <Router path="/register" component={Register} />
                                <Router path="/login" component={Login} />
                            </Switch>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;