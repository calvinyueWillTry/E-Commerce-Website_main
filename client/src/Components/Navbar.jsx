import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";
//these are inherited keywords defined by the library from 

function NavigationBar() {
    return(

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href={"/"}>
                <Logo/>
                Group #1 AAAMCYKG Final Project 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={"/reviews"}>| Reviews |</Nav.Link>
                  <Nav.Link href={"/shop"}>| Let's go Shopping! |</Nav.Link>
                  <Nav.Link href={"/signup"}>| Signup |</Nav.Link>
                  <Nav.Link href={"/user"}>| User Login |</Nav.Link>
                  <Nav.Link href={"/contact"}>| Contact |</Nav.Link>
                  
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/reviews"}>Reviews</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/shop"}>Let's go Shopping!</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/signup"}>Signup</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/user"}>User Login</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/contact"}>Contact</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>

          );
};
export default NavigationBar;