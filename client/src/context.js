import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            products: [],
            detailedProduct: [],
            cart: [],
            cartTotal:0

        }
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item._id === id);
        return product;
    }

    increment = (id) => {

    }

    decrement = (id) => {

    }

    removeItem = (id) => {

    }

    clearCart = () => {

    }


    handleProduct = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailedProduct:product}
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(()=>{
            return {products: tempProducts, cart:[...this.state.cart, product]};
        },()=>console.log(this.state));
    };

    componentDidMount() {
        this.getDataFromDb();
    };

    getDataFromDb  = async () => {
        axios.get("http://localhost:3001/api/getProductData")
            .then((res) => this.setState({ products: res.data.data, success: res.data.success }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state,
                handleProduct: this.handleProduct,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }
                // this.state.data
            }>
            {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};