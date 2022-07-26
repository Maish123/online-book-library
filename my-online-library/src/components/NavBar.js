 import React from "react";
 import { Link } from "react-router-dom";

 function NavBar(){
    return( 
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Info" className="nav-link">INFO</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Search" className="nav-link">SEARCH</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
 }

 export default NavBar;