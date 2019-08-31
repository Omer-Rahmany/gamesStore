import React, {Component} from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import '../css/shopping.css';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <ProductList/>
            </React.Fragment>
        );
    }
}

export default Home;