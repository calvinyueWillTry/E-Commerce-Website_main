import React from "react";

function Nav ({redirectToThisPage}) {
    return (
        <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <div>
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="#" onClick={()=>redirectToThisPage("Homepage")}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/reviews" onClick={()=>redirectToThisPage("Reviews")}>Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/shop" onClick={()=>redirectToThisPage("Shop")}>Let's go Shopping!</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/signup" onClick={()=>redirectToThisPage("Signup")}>Signup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/user" onClick={()=>redirectToThisPage("User")}>User Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="/contact" onClick={()=>redirectToThisPage("Contact")}>Contact</a>
                </li>
                </div>
                
              </ul>
            </div>
    )
};
export default Nav;