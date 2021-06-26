/* eslint-disable */

const Header = () => {

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
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Dark Mode?</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Class
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarClassSelector">
                                <li><a class="dropdown-item" href="#">ES</a></li>
                                <li><a class="dropdown-item" href="#">ER (Hardcoded)</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Show All</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Remove Cones</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search for Driver" aria-label="Search"></input>
                        <button class="btn btn-light" type="submit">Go</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header
