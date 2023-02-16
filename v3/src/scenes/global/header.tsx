function Header() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          <img src="images/logo2.png" width="35" height="35" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse collapse show"
          id="navbarsExample03"
          style={{}}
        >
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./results">
                Live Timing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle title-links"
                href="./faq"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FAQ
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="./faq#autocross101">
                  What is Autocross?
                </a>
                <a className="dropdown-item" href="./faq#tech">
                  Will I pass tech?
                </a>
                <a className="dropdown-item" href="./faq#location">
                  Where do you race?
                </a>
                <a className="dropdown-item" href="./faq#join">
                  How do I join?
                </a>
                <a className="dropdown-item" href="./faq#signup">
                  How do I sign up??
                </a>
              </div>
            </li>
          </ul>

          {/* <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
