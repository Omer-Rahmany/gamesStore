import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from "./context";

import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home';

// const routing = (
//     <Router>
//         <div>
//             <Route exact path="/" component={App} />
//             <Route exact path="/home" component={Home} />
//         </div>
//     </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));

ReactDOM.render(
    <ProductProvider>
        <App />
    </ProductProvider>
    , document.getElementById('root'));
serviceWorker.register();

// ReactDOM.render(
//     <BrowserRouter>
//         <ProductProvider>
//         <App />
//     </ProductProvider>
//      </BrowserRouter>
//     , document.getElementById('root'));
// serviceWorker.register();