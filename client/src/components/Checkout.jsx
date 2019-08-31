import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import {
    StripeProvider,
    Elements,
    CardNumberElement
} from 'react-stripe-elements'

import Navbar from "./Navbar";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./style-components/button";


const MyComponent = () => {
    const loadScript = src =>
        new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = src
            script.addEventListener('load', () => {
                resolve({successful: true})
            })
            script.addEventListener('error', event => {
                reject({error: event})
            })
            document.head.appendChild(script)
        })

    const [stripeLoaded, setStripeLoaded] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const result = await loadScript('https://js.stripe.com/v3/')
            setStripeLoaded(result)
        }
        fetchData()
    }, [])

    return stripeLoaded.successful ? (
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <Elements>
                <CardNumberElement/>
            </Elements>
        </StripeProvider>) : null
}

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {complete: false};
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {

                    console.log("Purchase Complete!")
                    alert('Purchase Complete!');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Purchase Failed! please try again');
            });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <ProductConsumer>
                    {value => {
                        return (
                        <div className="py-5">
                            <div className="container">
                                <form onSubmit={this.onSubmit}>
                                    <div className="checkout">
                                        <div className="form-row">
                                            <div id="card-element">
                                                <p>Insert Credit Card to complete the purchase</p>
                                                <MyComponent/>
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit Payment" onClick={() => {
                                            value.clearCart();
                                        }}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        )
                    }}
                        </ProductConsumer>
            </React.Fragment>
        );
    }
}

export default Checkout;