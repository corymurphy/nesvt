function Jumbotron() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h3 className="display-4" style={{ color: "white" }}>
            Welcome to NE-SVT Autocross!
          </h3>
          <p></p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="./faq" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
