/* eslint-disable */
import SearchBar from "./SearchBar";
import ClassDropDown from "./ClassDropDown";
import SortByDropDown from "./SortByDropDown";
import "./SearchBar.css";
import { useState } from "react";

const Header = (props) => {

    // TODO: pull the event name from the axware page and put it in the navbar

    const [clearButtonHidden, setClearButtonHidden] = useState(true)

    function changeDriverClassHandler(selectedDriverClass) {
        props.onSelectDriverClass(selectedDriverClass);
        { selectedDriverClass === "all" ? setClearButtonHidden(true) : setClearButtonHidden(false), props.onClearButtonHidden(false) }
        props.onSelectDriver("");
        sessionStorage.setItem("class", selectedDriverClass);
    }

    function changeSortByHandler(selectedSortBy) {
        props.onSelectedSortBy(selectedSortBy);
    }

    function driverSearchHandler(selectedDriver) {
        props.onSelectDriver(selectedDriver);
        if (selectedDriver === "") {
            setClearButtonHidden(true);
        } else {
            setClearButtonHidden(false);
            props.onClearButtonHidden(false);
        }
    }

    function clearButtonHandler() {
        setClearButtonHidden(true);
        props.onSelectDriver("");
        props.onSelectDriverClass("all");
        props.onClearButtonHidden(true);
    }


    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" id="mainNavBar">
            <div className="container-fluid">
                <a className="navbar-brand" href="">RESULTS (beta)</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <ClassDropDown
                                driverclasses={props.results.class}
                                onSelectDriverClass={changeDriverClassHandler}
                                clearButtonHidden={clearButtonHidden}
                            />
                        </li>

                        <li className="nav-item">
                            <SortByDropDown
                                onSelectedSortBy={changeSortByHandler}
                            />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="http://ne-svt.org/results/results_sample.html">Raw Results</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Remove Cones</a>
                        </li>
                    </ul>
                    <button
                        className="btn"
                        id="clearfilternav"
                        hidden={clearButtonHidden}
                        onClick={clearButtonHandler}>
                        Clear Filter
                    </button>
                    <SearchBar
                        drivers={props.results.drivers}
                        onSearchForDriver={driverSearchHandler}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header
