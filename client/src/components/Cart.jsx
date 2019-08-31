import React, {Component} from 'react';
import CartColumns from "./CartColumns";
import Title from "./Title";
import {ProductConsumer} from "../context";
import CartList from "./CartList";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {CheckOutButtonContainer} from "./style-components/button";

// import CartTotal from "./CartTotal";

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <section>
                    <ProductConsumer>
                        {value => {
                            const {cart} = value;
                            if (cart.length === 0) {
                                return (
                                    <Title name="your" title="cart is empty"/>
                                );
                            } else {
                                return (
                                    <React.Fragment>
                                        <Link to="/checkout" className="ml-auto">
                                            <CheckOutButtonContainer>
                                                <i className="fas fa-cart-arrow-down"/>
                                                CheckOut
                                            </CheckOutButtonContainer>
                                        </Link>
                                        <Title name="your" title="cart"/>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        {/*<CartTotal value={value} />*/}
                                    </React.Fragment>
                                );
                            }
                        }}
                    </ProductConsumer>
                </section>
            </React.Fragment>
        );
    }
}

export default Cart;