import React from "react";
import { Link } from 'react-router-dom';
import "../public/CSS/style.css"
//need to import css

function Nav () {
    return (
        <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <div>
                <div className="nav-item">
                    <Link className="nav-link" to={"/"}>
                        <h1> Home </h1>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={"/reviews"}>
                        <h1> Reviews </h1>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={"/shop"}>
                        <h1> Let's go Shopping! </h1>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={"/signup"}>
                        <h1> Signup </h1>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={"/user"}>
                        <h1> User Login </h1>
                    </Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to={"/contact"}>
                        <h1> Contact </h1>
                    </Link>
                </div>

                </div>
                
              </ul>
            </div>
    )
};
export default Nav;