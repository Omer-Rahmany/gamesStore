import React, {Component} from 'react';
import Navbar from "./Navbar";


class About extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1>About GameShop</h1>
                <div>We are the best game shopping website on the web</div>
                <h2>What we offer</h2>
                <p>An revolutionary way to conduct online transactions</p>
            </React.Fragment>
        );
    }
}
export default About;