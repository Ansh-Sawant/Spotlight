import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand href="/" className="navbarBrand">
            <img
              src="/lamp.png"
              className="d-inline-block align-top lamp"
              alt="Spotlight logo"
            />
            <span className="spotlightTitle">Spotlight</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {/* <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                className="categories"
              >
                <NavDropdown.Item ><Link to="/national" >India</Link></NavDropdown.Item>
                <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Politics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Technology
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/bookmarks" className="login">
                My Bookmarks
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login" className="login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </>
  );
};

export default Header;
