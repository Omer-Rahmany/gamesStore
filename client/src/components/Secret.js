import React, {Component} from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import '../css/shopping.css';
import {Switch,Route} from "react-router-dom";

class Secret extends Component {

    constructor() {
        super();
        //Set default message
        this.state = {
            message: 'Loading...'
        }
    }

    componentDidMount() {
        //GET message from server using fetch api
        fetch('/api/secret')
            .then(res => res.text())
            .then(res => this.setState({message: res}));
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Secret</h1>
                    <p>{this.state.message}</p>
                </div>
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/home" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
            </React.Fragment>
            </div>
        );
    }
}

export default Secret;