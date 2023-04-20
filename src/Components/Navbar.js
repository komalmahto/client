import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import navbarLogo from "../images/navbarLogo.png";
import "./Navbar.css";
function NavBar() {
  const expand = "md";
  return (
    <>
      <div className="navBarContainer">
        <Navbar key={expand} expand={expand} className="mb-3 custom">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="navbarLogo">
                <img src={navbarLogo} alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#slider">Testimonials</Nav.Link>
                  <Nav.Link href="#footer">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
