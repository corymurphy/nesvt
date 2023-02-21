import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRef, useState } from "react";
import ClassDropDown from "./ClassDownDrop";

export default function Header(props: any) {
  const [clearButtonHidden, setClearButtonHidden] = useState(true);
  const navButtonRef = useRef();

  function changeDriverClassHandler(selectedDriverClass: string) {
    // navButtonRef.current.click();
    props.onSelectDriverClass(selectedDriverClass);
    {
      selectedDriverClass === "all"
        ? setClearButtonHidden(true)
        : setClearButtonHidden(false),
        props.onClearButtonHidden(false);
    }
    props.onSelectDriver("");
    sessionStorage.setItem("class", selectedDriverClass);
  }

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">
          <Image src="images/logo2.png" width={35} height={35} />
        </Navbar.Brand>

        <ClassDropDown
          results={props.results}
          clearButtonHidden={clearButtonHidden}
          onSelectDriverClass={changeDriverClassHandler}
        />
      </Container>
    </Navbar>
  );
}
