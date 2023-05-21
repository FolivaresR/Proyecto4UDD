import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../Header-nav/Header.css';

function Header() {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
setShowMenu(!showMenu);
};

return (
<header>
    <h1></h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">AboutUs</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Menú">Menú</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Galeria">Galeria</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Reservations">Reservaciones</Link>
        </li>
        </ul>
    </div>
    </nav>
    <Outlet />
</header>
);
}

export default Header;
