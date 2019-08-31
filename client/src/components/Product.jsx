import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {ProductConsumer} from "../context";


class Product extends Component {
    render() {
        const {_id, name, image, price, inCart} = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <h3> {name} </h3>
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5"
                                 onClick={() =>
                                     value.handleProduct(_id)
                                 }>
                                <Link to="/details">
                                    <img src={require("./" + image)} alt="product" className="card-img-top"/>
                                </Link>
                                <button className="cart-btn"
                                        disabled={inCart}
                                        onClick={() => {
                                            value.addToCart(_id)
                                        }}>
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            {" "}
                                            In Cart!
                                        </p>) : (
                                        <i className="fas fa-cart-plus"/>
                                    )}
                                </button>

                            </div>
                        )}

                    </ProductConsumer>
                </div>

                <h5> {price}$ </h5>

            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`
.cart{
    border-color:transparent;
    transition:all is linear;
}
`;

export default Product;