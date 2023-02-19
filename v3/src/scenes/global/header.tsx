import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src="images/logo2.png" width={35} height={35} />
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="./">Home</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="./results">Live Timing</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="./events">Events</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="./gallery">Gallery</Nav.Link>
        </Nav>

        <Navbar.Collapse id="faq">
          <Nav>
            <NavDropdown id="faq" title="FAQ" menuVariant="dark">
              <NavDropdown.Item href="./faq#autocross101">
                What is Autocross?
              </NavDropdown.Item>
              <NavDropdown.Item href="./faq#tech">
                Will I pass tech?
              </NavDropdown.Item>
              <NavDropdown.Item href="./faq#location">
                Where do you race?
              </NavDropdown.Item>
              <NavDropdown.Item href="./faq#join">
                How do I join?
              </NavDropdown.Item>
              <NavDropdown.Item href="./faq#signup">
                How do I sign up?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="faq" />
      </Container>
    </Navbar>
  );
}

export default Header;
