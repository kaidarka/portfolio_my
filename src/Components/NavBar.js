import React from 'react';
import navLogo from '../images/logo.png';
import '../styles/navBar.scss';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header">
            <div className="header-container container">
                <Link className="logo" to="/main">
                    <img src={navLogo} alt="logo: WebDev"/>
                </Link>
                <div className="header__burger">
                    <span></span>
                </div>
                <nav className="header__nav d-none d-md-flex">
                    <ul className="nav__list">
                        <li><Link to="/main" className="nav__link">Главная</Link></li>
                        <li><Link to="/works" className="nav__link">Мои работы</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;