import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './css/shopping.css';

class NoamTiramREADME extends Component {

    render() {
            return (
                <React.Fragment>
                    <Navbar/>
                    <h2>Store name:</h2>
                    <p>Games Store </p>
                    <h2>What are you selling?</h2>
                    <p> Games :P</p>
                    <h2>What additional page(s) did you add? How to operate them</h2>
                    <p> <li>We added “About Me” page where our users should navigate and read about us </li>
                        <li>We added Details page for every product - In the home page users can see all the products we offer, but when they click on a product - we route them to the detailed page where a whole page is dedicated to the selected product.</li>
                    </p>
                    <h2>What was hard to do?</h2>
                    <p><li>It was hard to implement the project with the latest technologies, we’ve used reactJs, express, mongoDB as a DB in cloud as we wanted to have a high level project where we can learn from and enjoy, however it was hard to learn these technologies almost from scratch. Although, the lessons in the class were very helpful :) </li>
                    <li>It was hard to understand how to do things correctly with react, e.g how to pass information between components - but youtube come to the rescue and a lot of self learning took place.</li>
                    </p>
                    <h2>Who is your partner?  name and id. What did you do? What did your partner do?</h2>
                    <p><li>Omer rahmany - 304847924 - was responsible mostly for the backend, register, login, cookies, DB</li>
                    <li>Noam Tiram - 303066427 - was responsible mostly for the frontend, UI, store DB</li></p>
                    <h2>Specify all the different route your app supports</h2>
                    <p>
                        <li>"/"</li>
                        <li>"/home"</li>
                        <li>"/register"</li>
                        <li>"/login"</li>
                        <li>"/details"</li>
                        <li>"/cart"</li>
                        <li>"/about"</li>
                        <li>"/checkout"</li>
                        <li>"/admin"</li>
                        <li>"/readme.html"</li>
                        <li>"/omer_rahmany_readme"</li>
                        <li>"/noam_tiram_readme"</li>
                    </p>
                    <h2>How did you make your store secured?</h2>
                    <p>Whenever a user is logging in, we store a cookie with access token which expires after 5 min.
                        In addition, in order to login to the store, the user most provide the correct password which is hashed and stored in mongoDB
                    </p>
                    <h2>Did you implement the store using react.js?</h2>
                    <p>YES!!!</p>

                </React.Fragment>
            );
        }
}

export default NoamTiramREADME;