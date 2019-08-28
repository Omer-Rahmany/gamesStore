import React, {Component} from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import '../css/shopping.css';
import {Switch,Route} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/home" component={ProductList} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default Home;