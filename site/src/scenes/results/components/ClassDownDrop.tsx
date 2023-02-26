import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function ClassDropDown(props: any) {
  const [selectedClass, setSelectedClass] = useState(
    sessionStorage.getItem("class") || "all"
  );

  function classSelectHandler(event: any) {
    event.preventDefault();
    setSelectedClass(event.target.id);
    props.onSelectDriverClass(event.target.id);
  }

  return (
    <Nav>
      <NavDropdown id="classes" title="Class" menuVariant="dark">
        {props.results.hasOwnProperty("class") ? (
          Object.keys(props.results.class).map((item) => (
            <NavDropdown.Item
              className={
                item === selectedClass && props.clearButtonHidden === false
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              id={item}
              onClick={classSelectHandler}
              key={item}
            >
              {item}
            </NavDropdown.Item>
          ))
        ) : (
          <NavDropdown.Item key="noData">No Data</NavDropdown.Item>
        )}
        <NavDropdown.Divider />
        <NavDropdown.Item
          className={
            selectedClass === "all" || props.clearButtonHidden === true
              ? "dropdown-item active"
              : "dropdown-item"
          }
          onClick={classSelectHandler}
          id="all"
          key="showAll"
        >
          Show All
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
