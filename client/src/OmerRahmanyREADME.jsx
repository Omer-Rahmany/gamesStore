import React, {Component} from 'react';
import './css/shopping.css';
import Navbar from "./components/Navbar";

class OmerRahmanyREADME extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <h2>Store name:</h2>
                <p>Games Store </p>
                <h2>What are you selling?</h2>
                <p> Games :P</p>
                <h2>What additional page(s) did you add? How to operate them</h2>
                <p>
                    <li>We added “About Me” page where our users should navigate and read about us</li>
                    <li>We added Details page for every product - In the home page users can see all the products we
                        offer, but when they click on a product - we route them to the detailed page where a whole page
                        is dedicated to the selected product.
                    </li>
                </p>
                <h2>What was hard to do?</h2>
                <p>
                    <li> It was hard implementing the website in react which we didn't knew before,
                        It was a good experience and i'm happy that we got the chance to use this new language,
                        but without a debut, it made things more complex since we had to learn it from scratch.
                    </li>
                    <li> In addition, Us wanting to use MongoDB and integrating it to our project also took it's share
                        of time.
                    </li>
                    <li> I see this course as the closest thing from academy to full stack and for me, it was really
                        interesting
                        to see how all of the things that are required for a website to work, all work together,
                        I believe this is one of the hardest things this project pushed you to get - understand the full
                        lifecycle of the web application.
                    </li>
                </p>
                <h2>Who is your partner? name and id. What did you do? What did your partner do?</h2>
                <p>
                    <li>Omer rahmany - 304847924 - was responsible mostly for the backend, register, login, cookies,
                        DB
                    </li>
                    <li>Noam Tiram - 303066427 - was responsible mostly for the frontend, UI, store DB</li>
                </p>
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
                    In addition, in order to login to the store, the user most provide the correct password which is
                    hashed and stored in mongoDB
                </p>
                <h2>Did you implement the store using react.js?</h2>
                <p>YES!!!</p>

            </React.Fragment>
        );
    }
}

export default OmerRahmanyREADME;