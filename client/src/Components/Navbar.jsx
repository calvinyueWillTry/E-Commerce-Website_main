import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./Logo";

function navigationBar() {
    return(
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
              <Navbar.Brand className="m-2" href={"/shop"}>E-Commerce Website</Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href={"/shop"}>| Products |</Nav.Link>
                  <Nav.Link href={"/signup"}>| Signup |</Nav.Link>
                  <Nav.Link href={"/Login"}>| Login |</Nav.Link>
                  <Nav.Link href={"/contact"}>| Contact |</Nav.Link>
                  
                  <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href={"/reviews"}>Reviews</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/shop"}>Let's go Shopping!</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/signup"}>Signup</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/user"}>User Login</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={"/contact"}>Contact</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Nav>
                  <Nav.Link href="/Account">Account</Nav.Link>
                </Nav>
              
            </Navbar>
          );
};
export default navigationBar;