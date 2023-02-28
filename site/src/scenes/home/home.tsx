import { MsrEvents } from "../../models/data/msr";
import About from "./about";
import Events from "./events";
import Jumbotron from "./jumbotron";

function Home(props: {msrEvents: MsrEvents}) {
  return (
    <>
      <Jumbotron />

      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <Events msrEvents={props.msrEvents}/>
          <About />
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
