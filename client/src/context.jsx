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
            cartTotal: 0
        }
    };


    getItem = (id) => {
        const product = this.state.products.find(item => item._id === id);
        return product;
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        let tempProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(tempProduct);
        const product = tempCart[index];
        product.count++;
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal()
        })
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        let tempProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(tempProduct);
        const product = tempCart[index];
        product.count--;
        product.total = product.price * product.count;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal()
        })
    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item._id !== id);
        let removedProduct = tempProducts[tempProducts.indexOf(this.getItem(id))];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => this.addTotal())
    };

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
            console.log("cart cleared");
            this.getDataFromDb();
            this.addTotal();
        })
    };

    addTotal = () => {
        let total = 0;
        this.state.cart.map(item => {
            total += item.total;
            return total
        });
        this.setState(() => {
            return {
                cartTotal: total
            }
        })
    };

    handleProduct = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailedProduct: product}
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, () => this.addTotal());
    };

    componentDidMount() {
        this.getDataFromDb();
    };

    getDataFromDb = async () => {
        axios.get("http://localhost:3001/api/getProductData")
            .then((res) => this.setState({products: res.data.data, success: res.data.success}))
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