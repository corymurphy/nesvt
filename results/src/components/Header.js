/* eslint-disable */
import SearchBar from "./SearchBar";
import ClassDropDown from "./ClassDropDown";

const Header = (props) => {

    function changeDriverClassHandler(selectedDriverClass) {
        props.onSelectDriverClass(selectedDriverClass);
    }

    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark" id="mainNavBar">
            <div class="container-fluid">
                <a class="navbar-brand" href="">RESULTS</a>
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
                    <SearchBar />
                </div>
            </div>
        </nav>
    )
}

export default Header
