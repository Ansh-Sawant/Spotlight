import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home" className="navbarBrand">
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
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="categories"
            >
              <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Politics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Technology</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes" className="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
