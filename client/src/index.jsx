import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import Details from "./components/Details";
import Cart from "./components/Cart";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Admin from "./components/Admin";
import {ProductProvider} from "./context";
import README from "./README";
import OmerRahmanyREADME from "./OmerRahmanyREADME";
import NoamTiramREADME from "./NoamTiramREADME";

const routing = (
    <BrowserRouter>
        <ProductProvider>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/readme.html" component={README}/>
                <Route exact path="/omer_rahmany_readme" component={OmerRahmanyREADME}/>
                <Route exact path="/noam_tiram_readme" component={NoamTiramREADME}/>
            </div>
        </ProductProvider>
    </BrowserRouter>
)

ReactDOM.render(
    routing,
    document.getElementById('root'));
serviceWorker.register();