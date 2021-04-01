import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-section" style={{ backgroundColor: "#e3f2fd", padding: '20px'}}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <div className="container-fluid">
                        <h4>Laptop Magic HUB</h4>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/order">Order</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Deals</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    );
};

export default Header;