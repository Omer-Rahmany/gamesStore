import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./style-components/button";

// const {_id, name, image, price, inCart} = this.props.product;
// const {_id, name, image, price, inCart} = value.detailedProduct;
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {_id, name, image, price, inCart, details} = value.detailedProduct;
                    console.log(value.detailedProduct);
                    return (

                        <div className="container py-5">

                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                     <h1>{name}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                  <img src={require("./" + image)} className="img-fluid" alt="product" />
                                  </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4> Product Details: </h4>
                                    <p className="text-muted lead"> {details}</p>
                                    <h4> Product Price: </h4>
                                    <h1>{price}</h1>
                                    <Link to="/home">
                                        <ButtonContainer>
                                            Back To Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    disabled={inCart}
                                    onClick={() => {
                                        value.addToCart(_id);
                                    }}>
                                        {inCart ? "Item In Cart!" : "Add To Cart"}
                                    </ButtonContainer>

                                </div>

                              </div>

                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">

                                </div>
                            </div>

                        </div>


                    )
                }}
            </ProductConsumer>


        );
    }
}

export default Details;