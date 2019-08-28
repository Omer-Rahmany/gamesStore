import React, {Component} from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import '../css/shopping.css';
import {Switch,Route} from "react-router-dom";
import {ProductProvider} from "../context";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/home" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default Home;