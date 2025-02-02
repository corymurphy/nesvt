import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import SortBy from "./SortBy";

export default function SortByDropDown(props: any) {
  const [selectedSort, setSelectedSort] = useState(
    sessionStorage.getItem("sortBy") || "class"
  );

  function sortSelectHandler(event: any) {
    event.preventDefault();
    setSelectedSort(event.target.id);
    props.onSelectedSortBy(event.target.id);
    sessionStorage.setItem("sortBy", event.target.id);
  }

  return (
    <Nav>
      <NavDropdown id="navbarSortBySelector" title="SortBy" menuVariant="dark">
        {Object.keys(SortBy).map((sortBy: string) => (
          <NavDropdown.Item
            key={sortBy}
            className={
              SortBy[sortBy] === selectedSort
                ? "dropdown-item active"
                : "dropdown-item"
            }
            onClick={sortSelectHandler}
            id={SortBy[sortBy]}
          >
            {sortBy}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
  );
}
