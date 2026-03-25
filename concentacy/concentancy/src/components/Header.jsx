import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaShoppingCart,FaPhoneAlt,FaEnvelope  } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="brand-logo">
        Consultanc<span className="highlight">Y</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./about">About Us</Nav.Link>
            <Nav.Link href="./services">Services</Nav.Link>
            <Nav.Link href="./contact">Contact Us</Nav.Link>

           
          </Nav>
           {/* Contact Details */}
           <div className="contact-info d-flex align-items-center">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@consultancy.com">info@consultancy.com</a>
            </div>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
