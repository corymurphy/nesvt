import { useCallback, useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";

function Faq() {
  var hashPrefix: string = "#/faq";
  const [active, setActive] = useState<string[]>([window.location.hash]);

  console.log(active);
  // const hashChangeHandler = useCallback(() => {
  //   setActive([window.location.hash]);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('hashchange', hashChangeHandler);
  //   return () => {
  //     window.removeEventListener('hashchange', hashChangeHandler);
  //   };
  // }, []);

  // useEffect(() => {
  //   setActive([window.location.hash]);
  // }, []);

  return (
    <Container>
      <Accordion defaultActiveKey={active} flush>
        <Accordion.Item eventKey={hashPrefix + "#autocross101"}>
          <Accordion.Header>What is Autocross?</Accordion.Header>
          <Accordion.Body>
            This video gives a very good over view of the sport of autocross and
            is about 9 minutes long.
            <div className="video-responsive">
              <iframe
                src="https://player.vimeo.com/video/12067348"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></iframe>
            </div>
            Part of what makes autocross so inexpensive is the shared work load.
            Each person is assigned a work station. You will most likely be
            assigned a station on the course where you will reset hit cones,
            call them in and flag cars in case of an issue. Each person works
            for one session and drives the other. We have 4 of these sessions
            and your participation in the working portion is vital to the
            operation of the event. If you do not show up to work your station
            then the event stops until we can find you or a replacement. This is
            the golden rule of autocross, you must work your assignment, leaving
            early without cause will ensure that you are not welcomed back at
            our or anyone else's events.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={hashPrefix + "#tech"}>
          <Accordion.Header>Will my car pass tech?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Your car must be registered and insured.</li>
              <li>
                Check tires - Good condition, no exposed cords, cracks in
                sidewalls.
              </li>
              <li>Check wheel lugs for tightness, none missing.</li>
              <li>Hub caps / wheel / lug covers removed.</li>
              <li>Check wheel bearings for tightness.</li>
              <li>Check suspension for tightness.</li>
              <li>
                Check seat belts for good condition, lap belts minimum are
                required. Racing harness should be mounted properly.
              </li>
              <li>Check the battery mounting, must be mounted securely.</li>
              <li>Check overall for fluid leaks.</li>
              <li>
                Check that brake pedal is firm. Brake and clutch fluid levels
                are sufficient, no leaks.
              </li>
              <li>Check throttle return spring.</li>
              <li>
                Remove all loose items from interior, NO FLOOR MAT ON DRIVER
                SIDE.
              </li>
              <li>
                Remove all suction cup devices. i.e. radar detectors, gps
                receivers etc.
              </li>
              <li>
                Helmet must be of SNELL 2015 (M OR SA) standard or newer or FIA
                homologation.
              </li>
              <li>
                Car numbers (className is optional) must be on both sides of the
                car and readable from 25 feet.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={hashPrefix + "#location"}>
          <Accordion.Header>Where do you race?</Accordion.Header>
          <Accordion.Body>
            <p className="lead">
              A typical course layout is 1.8 Miles long at takes around 100 -
              120 seconds to complete.
            </p>
            <p className="lead">
              Autocross events are held at the old U.S. Army Moore Airfield at
              Fort Devens, located in Ayer, MA. a little north of Route 2 and
              West of Route 495. (92 Fitchburg Road, Ayer MA){" "}
            </p>
            <p className="lead">
              From Route 495: Take exit 30, route 2A and 110, West toward Ayer.
              Proceed 4 miles to rotary.
            </p>
            <p className="lead">
              From Route 2: Take exit 38B, route 110 and 111, North toward Ayer.
              Proceed 2 1/4 miles to rotary.
            </p>
            <p className="lead">
              Both directions converge at a Rotary in Ayer at the junctions of
              routes 110, 111, and 2A. There is a Ford dealer (Gervais), a
              Wendy's, and a McDonald's at this rotary.
            </p>
            <p className="lead">
              From the rotary, proceed west on routes 2A and 111. This will take
              you to Ayer center, and at about one mile routes 2A and 111 turn
              right; so will you. Proceed past Bishop Road on the left. Stay on
              Rt 2A which forks to the left for approx another mile. The north
              entrance to the airstrip is on the left. There should be a sign
              marking the entrance. There are motorcycle driving classNamees on
              the lower lot to the right as you enter. Our event is up the hill
              to the left. Look for the person with the waivers at the top of
              the hill. There are a Dunkin Donuts and a Cumberland Farms between
              the Ayer center and the gate and there are gas stations along the
              route as well. You can find Moore Army Air Strip in Google maps
              just north of Ayer center. The entrance is right behind the tower
              on the north side of the site
            </p>

            <p>
              <img
                src="images/devens.svg"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={hashPrefix + "#join"}>
          <Accordion.Header>How do I join NE-SVT?</Accordion.Header>
          <Accordion.Body>
            <h3>Signing up for ne-svt membership.</h3>
            <p className="lead">
              Yearly membership is $10 and is required in order to participate
              in any ne-svt event. <br />
              You can sign up for membership here:&nbsp;{" "}
              <a
                href="https://www.motorsportreg.com/events/ne-svt-2023-membership-devens-airfield-785736"
                target="_blank"
              >
                2023 ne-svt membership.
              </a>
              <br />
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={hashPrefix + "#signup"}>
          <Accordion.Header>
            How do I sign up for an autocross event?
          </Accordion.Header>
          <Accordion.Body>
            <p className="lead">
              <strong>
                You can sign up for an event through our events page.
              </strong>
            </p>
            <p className="lead">
              Click <a href="./events">here</a> to see our events page
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Faq;
