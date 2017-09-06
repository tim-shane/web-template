/**
 * Created by tim on 8/23/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div className="container">
                    <Link className="navbar-brand" to="/">Company Name</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn">Log In / Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;