import { useState } from "react";

const ClassDropDown = (props: any) => {
  const [selectedClass, setSelectedClass] = useState(
    sessionStorage.getItem("class") || "all"
  );

  function classSelectHandler(event: any) {
    event.preventDefault();
    setSelectedClass(event.target.id);
    props.onSelectDriverClass(event.target.id);
  }

  return (
    <>
      {/* eslint-disable-next-line */}
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Class
      </a>
      <ul
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
        id="navbarClassSelector"
      >
        {props.driverclasses ? (
          Object.keys(props.driverclasses)
            .sort()
            .map((driverclass) => (
              <li key={driverclass}>
                <button
                  className={
                    driverclass === selectedClass &&
                    props.clearButtonHidden === false
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  type="button"
                  id={driverclass}
                  onClick={classSelectHandler}
                >
                  {driverclass.toUpperCase()}
                </button>
              </li>
            ))
        ) : (
          <li>
            <button className="dropdown-item" type="button" id="nodata">
              No Data
            </button>
          </li>
        )}
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className={
              selectedClass === "all" || props.clearButtonHidden === true
                ? "dropdown-item active"
                : "dropdown-item"
            }
            type="button"
            id="all"
            onClick={classSelectHandler}
          >
            Show All
          </button>
        </li>
      </ul>
    </>
  );
};

export default ClassDropDown;
