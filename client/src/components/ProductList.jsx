import React, {Component} from 'react';
import Product from "./Product";
import Title from './Title';
import {ProductConsumer} from "../context";

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            filterTerm: ''
        }
    }

    handleChange(e) {
            // Set the filtered state based on what our rules added to newList
            this.setState({
                filterTerm: e.target.value
            });
    }

    filter(currentList) {
        if (currentList.length === 0){
            return currentList;
        }
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (this.state.filterTerm !== "") {
            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.name.toLowerCase();
                // change search term to lowercase
                const filter = this.state.filterTerm.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
                return lc;
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = currentList;
        }
       return newList
    }


    render() {
        return (
            <React.Fragment>
                <input type="text" className="input searchTerm" onChange={this.handleChange.bind(this)}
                       placeholder="Search..." />

                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                        <ProductConsumer>
                            {(value)=> {
                                let filterd =  this.filter(value.products)
                                return filterd.map(product => {
                                    return <Product key={product._id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;