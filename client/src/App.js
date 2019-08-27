// /client/App.js
import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import axios from 'axios';
import Login from  "./Login";
import Register from  "./Register";
import "./css/stylesheet.scss";
import Home from "./components/Home";
import Secret from "./components/Secret";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    // initialize our state
    state = {
        isLoggedIn: true,
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

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        console.log(this.props.register);
        const {data} = this.state;
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <Router>
                        <Home/>
                    </Router>
                </div>
            );

        } else {
            return (
                <div>
                    {/*<div className="root-container">*/}
                    {/*    <div className="box-container">*/}
                    {/*            <ul>*/}
                    {/*                <li><Link to="/home">Home</Link></li>*/}
                    {/*                <li><Link to="/secret">Secret</Link></li>*/}
                    {/*                <li><Link to="/register">Register</Link></li>*/}
                    {/*                <li><Link to="/login">Login</Link></li>*/}
                    {/*            </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div>
                        <ul>
                            {data.length <= 0
                                ? 'NO DB ENTRIES YET'
                                : data.map((dat) => (
                                    <li style={{padding: '10px'}} key={data.message}>
                                        <span style={{color: 'gray'}}> id: </span> {dat.id} <br/>
                                        <span style={{color: 'gray'}}> data: </span>
                                        {dat.message}
                                    </li>
                                ))}
                        </ul>
                        <div style={{padding: '10px'}}>
                            <input
                                type="text"
                                onChange={(e) => this.setState({message: e.target.value})}
                                placeholder="add something in the database"
                                style={{width: '200px'}}
                            />
                            <button onClick={() => this.putDataToDB(this.state.message)}>
                                ADD
                            </button>
                        </div>
                    </div>
                    {/*<Switch>*/}
                    {/*    <Route path="/home" exact component={Home} />*/}
                    {/*    <Route path="/secret" component={Secret} />*/}
                    {/*    <Route path="/register" component={Register} />*/}
                    {/*    <Route path="/login" component={Login} />*/}
                    {/*</Switch>*/}
                </div>

            );
        }
    }
}

export default App;