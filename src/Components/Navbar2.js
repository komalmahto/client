import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import navbarLogo from "../images/navbarLogo.png";
import "./Navbar.css";
function NavBar2() {
  const expand = "md";
  return (
    <>
      <div className="navBarContainer">
        <Navbar key={expand} expand={expand} className="mb-3 custom">
          <Container fluid>
            <Navbar.Brand href="/#">
              <div className="navbarLogo">
                <img src={navbarLogo} alt="" />
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar2;
