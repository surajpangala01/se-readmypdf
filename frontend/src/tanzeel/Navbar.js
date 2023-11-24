
import React from "react";
import {Link} from 'react-router-dom'
import logo from "../images/headphones.jpg"
import './navbar.css'

function Navbar(props){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"80px",width:"100%",paddingLeft:"20px"}}>
                <Link className="nav-link" aria-current="page" to="/">
                    <img className="logo" src={logo} alt="img"></img>
                </Link>
                <Link className="navbar-brand" to="/">Home</Link>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{border:'2px solid green'}}>
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/Aboutus">About us</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" tabIndex="-1" aria-disabled="true">Sign Up</Link>
                        </li>
                        {props.login && <li className="nav-item">
                            <Link className="nav-link" to="/reader" tabIndex="-1" aria-disabled="true">Reader</Link>
                        </li>}
                        {props.login && <li className="nav-item">
                            <Link className="nav-link" to="/about" tabIndex="-1" aria-disabled="true">About Me</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;