import About from "./about";
import Events from "./events";
import Jumbotron from "./jumbotron";

function Home() {
  return (
    <>
      <Jumbotron />

      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <Events />
          <About />
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
