import { useState } from "react";

const ClassDropDown = (props) => {

    const [selectedClass, setSelectedClass] = useState("all");
    const [dropdownActive, setDropdownActive] = useState("");

    function classSelectHandler(event) {
        event.preventDefault();
        setSelectedClass(event.target.id);
        props.onSelectDriverClass(event.target.id);
    }

    return (
        <div>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Class
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarClassSelector">
                {props.driverclasses ? Object.keys(props.driverclasses).sort().map(driverclass =>
                    <li>
                        <button
                            class={driverclass === selectedClass ? "dropdown-item active" : "dropdown-item"}
                            type="button"
                            id={driverclass}
                            onClick={classSelectHandler}>
                            {driverclass.toUpperCase()}
                        </button>
                    </li>
                ) :
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            id="nodata">
                            No Data
                        </button>
                    </li>
                }
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li>
                    <button
                        class={selectedClass === "all" ? "dropdown-item active" : "dropdown-item"}
                        type="button"
                        id="all"
                        onClick={classSelectHandler}>
                        Show All
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ClassDropDown;