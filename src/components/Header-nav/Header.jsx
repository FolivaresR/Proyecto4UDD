import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        setShowMenu(false);
    }, [location]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Inicio</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={showMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"></Link>
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
