// /client/App.jsx
import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import axios from 'axios';
import Login from  "./Login";
import Register from  "./Register";
import "./css/stylesheet.scss";
import Home from "./components/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import Redirect from "react-router-dom/es/Redirect";
import {ProductProvider} from "./context";

class App extends Component {
    // initialize our state
    state = {
        isLoggedIn: false,
        data: [],
        id: 0,
        isLoginOpen: true,
        isRegisterOpen: false
        //
        // data: [],
        // id: 0,
        // message: null,
        // intervalIsSet: false,
        // idToDelete: null,
        // idToUpdate: null,
        // objectToUpdate: null,
    };

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    componentDidMount() {
        //GET message from server using fetch api
        fetch('/api/checkToken')
            .then(res => {
                this.setState({isLoggedIn: false})
            });
    }

    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        console.log(this.props.register);
        const {data} = this.state;
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Redirect to="/home" />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="root-container">
                        <div className="box-container">
                            <ul>
                                <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
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