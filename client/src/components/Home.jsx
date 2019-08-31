import React, {Component} from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import '../css/shopping.css';
import UserProfile from './UserProfile';
import {Link} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        };
    }

    componentDidMount() {
        this.setState({username: UserProfile.getName()})
        console.log("user is: " + this.state.username)
    }

    render() {
        // Checking if the user id admin
        let userInSession = UserProfile.getName();
        if (userInSession !== "admin") {
            return (
                <React.Fragment>
                    <Navbar/>
                    <ProductList/>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Navbar/>
                    <Link to="/admin" className="nav-link">
                        Admin Console
                    </Link>
                    <ProductList/>
                </React.Fragment>
            );
        }
    }
}

export default Home;