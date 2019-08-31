import React, {Component} from 'react';
import './css/shopping.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import NoamTiramREADME from "./NoamTiramREADME";
import OmerRahmanyREADME from "./OmerRahmanyREADME";
import Switch from "react-router-dom/es/Switch";

class README extends Component {

    render() {
            return (
                <div>
                    <h1 className="header">README Links</h1>
                    <div className="root-container">
                        <div className="box-container">
                            <Link to="/omer_rahmany_readme">Omer Rahmany README</Link>
                            <Link to="/noam_tiram_readme">Noam Tiram README</Link>
                            <Switch>
                                <Router path="/omer_rahmany_readme" component={OmerRahmanyREADME}/>
                                <Router path="/noam_tiram_readme" component={NoamTiramREADME}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            );
        }
}

export default README;