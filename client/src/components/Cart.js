import React, {Component} from 'react';
import CartColumns from "./CartColumns";
import Title from "./Title";
import {ProductConsumer} from "../context";
import CartList from "./CartList";
// import CartTotal from "./CartTotal";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length == 0) {
                            return (
                                <Title name="your" title="cart is empty" />
                                );
                        } else {
                            return(
                                <React.Fragment>
                                    <Title name="your" title ="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    {/*<CartTotal value={value} />*/}
                                </React.Fragment>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;