import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">
          <Image src="images/logo2.png" width={35} height={35} />
        </Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>

            <Nav.Link href="./#/results">Live Timing</Nav.Link>

            <Nav.Link href="./#/events">Events</Nav.Link>

            <Nav.Link href="./#/gallery">Gallery</Nav.Link>

            <NavDropdown id="faq" title="FAQ" menuVariant="dark">
              <NavDropdown.Item href="./#/faq#autocross101">
                What is Autocross?
              </NavDropdown.Item>
              <NavDropdown.Item href="./#/faq#tech">
                Will I pass tech?
              </NavDropdown.Item>
              <NavDropdown.Item href="./#/faq#location">
                Where do you race?
              </NavDropdown.Item>
              <NavDropdown.Item href="./#/faq#join">
                How do I join?
              </NavDropdown.Item>
              <NavDropdown.Item href="./#/faq#signup">
                How do I sign up?
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://www.motorsportreg.com/events/ne-svt-2025-membership-devens-airfield-012532">Contact Us</Nav.Link>
          </Nav>

          <Nav>
            <Navbar.Brand>
              <a href="https://motorsportreg.com" className="msr-link">
                <img
                  src="https://msr-hotlink.s3.amazonaws.com/powered-by/powered-by-msr-outline@2x.png"
                  alt="Online registration and event management service for motorsport events powered by MotorsportReg.com"
                  title="Online registration and event management service for motorsport events powered by MotorsportReg.com"
                  className="msr-img"
                />
              </a>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default Header;
