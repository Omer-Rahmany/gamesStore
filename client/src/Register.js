import React from 'react';
import "./css/stylesheet.scss";
import axios from "axios";
//Register Box
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {
        this.putDataToDB(this.state);
        console.log(this.state);
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
        this.setState({pwdState: "weak"});
        if (e.target.value.length > 8) {
            this.setState({pwdState: "medium"});
        } else if (e.target.value.length > 12) {
            this.setState({pwdState: "strong"});
        }
    }


    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = (message) => {
        axios.post('http://localhost:3001/api/putData', {
            email: message.email,
            username: message.username,
            password: message.password
        });
    };


    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                            onChange={this
                            .onUsernameChange
                            .bind(this)}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email"
                               onChange={this
                                   .onEmailChange
                                   .bind(this)}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            onChange={this
                                .onPasswordChange
                                .bind(this)}/>
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register</button>
                </div>

            </div>
        );
    }
}
export default Register;
