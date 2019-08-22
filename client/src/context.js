import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            products: []
        }
    };

    handleProduct = () => {
        console.log("hello from product");
    };

    addToCart = () => {
        console.log("hello from add to cart");
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
                addToCart: this.addToCart
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
