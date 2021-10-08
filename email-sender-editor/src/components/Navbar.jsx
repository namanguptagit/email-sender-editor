import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function Navbar(){
    return<nav className="navbar bg-dark container">
    <h4><Link className="link" to="/">Email-sender</Link></h4>
    <h4><Link className="link" to="/editor">Email-editor</Link></h4>
    </nav>

}
export default Navbar;