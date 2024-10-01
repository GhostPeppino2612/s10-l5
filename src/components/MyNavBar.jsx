import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation, useParams } from "react-router-dom";

function MyNavBar() {
  const url = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.brandbucket.com/sites/default/files/logo_uploads/559414/large_iceair.png"
            alt="logo img"
            width="100px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center">
            <NavLink
              to="/"
              className={`nav-link ${url.pathname === "/" ? "active" : ""}`}
            >
              Home
            </NavLink>
            <Nav.Link href="#link">Servizi</Nav.Link>
            <Nav.Link href="#link">Chi siamo</Nav.Link>
            <Nav.Link href="#link">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
