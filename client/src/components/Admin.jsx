import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import "../css/stylesheet.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from "./UserProfile";
import axios from 'axios';
import Navbar from "./Navbar";

class Admin extends Component {
    state = {
        isLoggedIn: false,
        filterTerm: '',
        isAdmin: false,
        users: []
    };

    handleChange(e) {
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filterTerm: e.target.value
        });
    }

    filter(currentList) {
        if (currentList.length === 0) {
            return currentList;
        }
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (this.state.filterTerm !== "") {
            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(user => {
                // change current item to lowercase
                const lc = user.key.toLowerCase();
                // change search term to lowercase
                const filter = this.state.filterTerm.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = currentList;
        }
        return newList
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/getAllUsers")
            .then((res) => this.setState({users: res.data.users}))
            .catch(err => console.log(err));
    }

    render() {
        // Checking if the user id admin
        let userInSession = UserProfile.getName();
        if (userInSession !== "admin") {
            return (
                <div>
                    <Redirect to="/home"/>
                </div>
            );
        } else {
            const users = this.state.users.map(user => (
                <div style={{border: "1px solid black"}} key={user.username}>
                    <h3>User Name: {user.username}</h3>
                    <p>Contact: {user.email}</p>
                    <p>Items in Cart: {user.items.length}</p>
                </div>
            ));
            return (
                <React.Fragment>
                    <Navbar/>
                    <div className="py-5">
                        <div>
                            <h1>Users Info</h1>
                            <input type="text" className="input" onChange={this.handleChange.bind(this)}
                                   placeholder="Search..."/>
                            {this.filter(users)}
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Admin;