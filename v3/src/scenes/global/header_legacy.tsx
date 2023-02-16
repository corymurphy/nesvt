function HeaderLegacy() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-header">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample08"
        aria-controls="navbarsExample08"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div style={{ color: "#e9ecef" }} className="nesvt-title">
        NE-SVT{" "}
      </div>
      <a style={{ padding: "0" }} className="nav-link" href="./">
        <img src="images/logo2.png" width="35" height="35" alt="" />
      </a>

      <div
        className="collapse navbar-collapse justify-content-md-center nesvt-nav"
        id="navbarsExample08"
      >
        <ul className="navbar-nav">
          <li className="nav-item nesvt-nav-item">
            <a
              className="nav-link"
              style={{ marginRight: "40px" }}
              href="./"
            >
              Home
            </a>
          </li>

          <li className="nav-item nesvt-nav-margin">
            <a className="nav-link" href="results">
              Live Timing
            </a>
          </li>

          <li className="nav-item nesvt-nav-margin">
            <a className="nav-link" href="autocrossevents.html">
              Autocross Events
            </a>
          </li>

          <li className="nav-item dropdown nesvt-nav-margin">
            <a
              className="nav-link dropdown-toggle title-links"
              href="faq.html"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              FAQ
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="faq.html#autocross101">
                What is Autocross?
              </a>
              <a className="dropdown-item" href="faq.html#tech">
                Will I pass tech?
              </a>
              <a className="dropdown-item" href="faq.html#location">
                Where do you race?
              </a>
              <a className="dropdown-item" href="faq.html#join">
                How do I join?
              </a>
              <a className="dropdown-item" href="faq.html#signup">
                How do I sign up??
              </a>
            </div>
          </li>

          <li className="nav-item nesvt-nav-margin ">
            <a className="nav-link" href="./gallery">
              Gallery
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              style={{ marginLeft: "40px" }}
              href="contact.html"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderLegacy;
