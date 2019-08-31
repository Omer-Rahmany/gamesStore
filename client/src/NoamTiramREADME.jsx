import React, {Component} from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './css/shopping.css';
import {Link} from "react-router-dom";

class NoamTiramREADME extends Component {

    render() {
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

export default NoamTiramREADME;