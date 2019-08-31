import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from './Images/logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './style-components/button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-light ">
                <Link to="/">
                    <img src={logo} alt="storeHome" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/home" className="nav-link">
                        products
                    </Link>
                    <li className="nav-item ml-5"></li>
                    <Link to="/about" className="nav-link">
                        about us
                    </Link>
                    <li className="nav-item ml-5"></li>
                    <Link to="/readme.html" className="nav-link">
                        README
                    </Link>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"/>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
`;
export default Navbar;
