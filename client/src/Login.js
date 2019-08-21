import React from 'react';
import "./css/stylesheet.scss";
//Login Box
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    submitLogin(e) {
        this.getDataFromDb();

    }

    getDataFromDb = async () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }))
            .then((data) => console.log(data));
    };

    // getDataFromDb = () => {
    //     fetch('http://localhost:3001/api/getData')
    //         .then((data) => data.json())
    //         .then((res) => this.setState({ data: res.data }));
    // };


    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLogin
                                .bind(this)}>Login</button>
                </div>
            </div>
        );
    }

}
export default Login;
