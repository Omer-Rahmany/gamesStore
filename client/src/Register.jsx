import React, { Component } from 'react';
import "./css/stylesheet.scss";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            username : '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/login');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="w3-center">
                <h1>Register Below!</h1>
                <p>Please fill in this form to create an account.</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="username"
                    name="username"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit"/>

                <div className="container signin">
                    <p>Already have an account? <a href="/login">Sign in</a>.</p>
                </div>
            </form>
        );
    }
}

export default Register;