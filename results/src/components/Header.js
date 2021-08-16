/* eslint-disable */
import SearchBar from "./SearchBar";
import ClassDropDown from "./ClassDropDown";
import "./SearchBar.css";
import { useState } from "react";

const Header = (props) => {

    const [clearButtonHidden, setClearButtonHidden] = useState(true)

    function changeDriverClassHandler(selectedDriverClass) {
        props.onSelectDriverClass(selectedDriverClass);
        setClearButtonHidden(false);
    }

    function driverSearchHandler(selectedDriver) {
        props.onSelectDriver(selectedDriver);
        setClearButtonHidden(false);
    }

    function clearButtonHandler() {
        setClearButtonHidden(true);
        props.onSelectDriver("");
        props.onSelectDriverClass("all");
    }


    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark" id="mainNavBar">
            <div class="container-fluid">
                <a class="navbar-brand" href="">RESULTS (beta)</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <ClassDropDown
                                driverclasses={props.results.class}
                                onSelectDriverClass={changeDriverClassHandler}
                            />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-current="page" href="#">Enable PAX</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Remove Cones</a>
                        </li>
                    </ul>
                    <button class="btn"
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
