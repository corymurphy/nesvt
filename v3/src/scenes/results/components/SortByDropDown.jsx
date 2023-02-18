import { useState } from "react";
import SortBy from "./SortBy";

const SortByDropDown = (props) => {
  const [selectedSort, setSelectedSort] = useState(
    sessionStorage.getItem("sortBy") || "class"
  );

  function sortSelectHandler(event) {
    event.preventDefault();
    setSelectedSort(event.target.id);
    props.onSelectedSortBy(event.target.id);
    sessionStorage.setItem("sortBy", event.target.id);
  }

  return (
    <div>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By
      </a>
      <ul
        className="dropdown-menu darkmode"
        aria-labelledby="navbarDropdown"
        id="navbarSortBySelector"
      >
        {Object.keys(SortBy).map((sortBy) => (
          <li key={SortBy[sortBy]}>
            <button
              className={
                SortBy[sortBy] === selectedSort
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              type="button"
              id={SortBy[sortBy]}
              onClick={sortSelectHandler}
            >
              {sortBy}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByDropDown;
