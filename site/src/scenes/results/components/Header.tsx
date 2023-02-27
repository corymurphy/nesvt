import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useRef, useState } from "react";
import ClassDropDown from "./ClassDownDrop";
import SortByDropDown from "./SortByDropDown";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
// import SearchBar from "../"

export default function Header(props: any) {
  const [clearButtonHidden, setClearButtonHidden] = useState(true);
  const navButtonRef = useRef();

  function changeSortByHandler(selectedSortBy: any) {
    // navButtonRef.current.click();
    props.onSelectedSortBy(selectedSortBy);
  }

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

  function driverSearchHandler(selectedDriver: any) {
    props.onSelectDriver(selectedDriver);
    if (selectedDriver === "") {
      setClearButtonHidden(true);
    } else {
      setClearButtonHidden(false);
      props.onClearButtonHidden(false);
    }
  }

  function clearButtonHandler() {
    // navButtonRef.current.click();
    setClearButtonHidden(true);
    props.onSelectDriver("");
    props.onSelectDriverClass("all");
    props.onClearButtonHidden(true);
  }

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">
          <Image src="images/logo2.png" width={35} height={35} />
        </Navbar.Brand>

        <Navbar.Collapse>
          <ClassDropDown
            results={props.results}
            clearButtonHidden={clearButtonHidden}
            onSelectDriverClass={changeDriverClassHandler}
          />

          <SortByDropDown onSelectedSortBy={changeSortByHandler} />

          <Nav>
            <Nav.Link href="data_sample.html">Raw Results</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Remove Cones
            </Nav.Link>
          </Nav>

          <button
            className="btn"
            id="clearfilternav"
            hidden={clearButtonHidden}
            onClick={clearButtonHandler}
          >
            Clear Filter
          </button>

          <SearchBar
            drivers={props.results.drivers}
            onSearchForDriver={driverSearchHandler}
            navButtonRef={navButtonRef}
          />
        </Navbar.Collapse>

        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}
