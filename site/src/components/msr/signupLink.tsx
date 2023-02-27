import { ClubEvent } from "../../models/data/event";
import parseDate from "../parse/datetime";

export default function SignUpLink(props: {
  event: ClubEvent;
  msrEvents: any;
}) {
  let now = new Date();

  function hasMsrEvent(event: ClubEvent, msrEvents: any) {
    let has = false;

    if (msrEvents == null) {
      return false;
    }

    if (!msrEvents.hasOwnProperty("recordset")) {
      return false;
    }

    if (msrEvents.recordset.total == 0) {
      return false;
    }

    if (!msrEvents.hasOwnProperty("events")) {
      return false;
    }

    var eventDate = new Date(event.startDate);
    msrEvents.events.forEach((msrEvent: any) => {
      var msrDate = new Date(msrEvent.start);

      if (
        msrDate.getFullYear() == eventDate.getFullYear() &&
        msrDate.getMonth() == eventDate.getMonth() &&
        msrDate.getDate() == eventDate.getDate()
      ) {
        has = true;
      }
    });

    return has;
  }

  function getMsrEvent(
    event: ClubEvent,
    msrEvents: any
  ): { start: string; detailuri: string } {
    let foundMsrEvent = { start: "", detailuri: "" };
    var eventDate = parseDate(event.startDate);
    msrEvents.events.forEach((msrEvent: any) => {
      var msrDate = parseDate(msrEvent.start);

      if (
        msrDate.getFullYear() == eventDate.getFullYear() &&
        msrDate.getMonth() == eventDate.getMonth() &&
        msrDate.getDate() == eventDate.getDate()
      ) {
        foundMsrEvent.start = msrEvent.start;
        foundMsrEvent.detailuri = msrEvent.detailuri;
        return;
      }
    });
    return foundMsrEvent;
  }

  if (!hasMsrEvent(props.event, props.msrEvents)) {
    return (
      <>
        <p className="desc">Registration will open 30 days prior.</p>
        <ul>
          <li style={{ width: "50%" }}>
            <a href="#website">
              <span className="fa fa-globe"></span> Event signup coming soon
            </a>
          </li>
        </ul>
      </>
    );
  }

  let msrEvent: { start: string; detailuri: string } = getMsrEvent(
    props.event,
    props.msrEvents
  );

  // event is in the past
  if (
    hasMsrEvent(props.event, props.msrEvents) &&
    now > parseDate(msrEvent.start)
  ) {
    return (
      <>
        <p className="desc">Registration Closed</p>
        <ul>
          <li style={{ width: "50%" }}>
            <a href="https://msreg.com/SVT-5-8-22">
              <span className="fa fa-globe"></span> Registration Closed
            </a>
          </li>
        </ul>
      </>
    );
  }

  // event is in the future
  if (
    hasMsrEvent(props.event, props.msrEvents) &&
    now < parseDate(msrEvent.start)
  ) {
    return (
      <>
        <p className="desc">Registration open now!</p>
        <ul>
          <li style={{ width: "50%" }}>
            <a href={msrEvent.detailuri}>
              <span className="fa fa-globe"></span> MotorsportReg Event Signup
            </a>
          </li>
        </ul>
      </>
    );
  }

  return <></>;
}

{
  /* <p className="desc">Registration open now!</p>
<ul>
  <li style={{ width: "50%" }}>
    <a href="https://msreg.com/SVT-6-18-22">
      <span className="fa fa-globe"></span> MotorsportReg Event
      Signup
    </a>
  </li>
</ul> */
}

{
  /* <p className="desc">Registration Closed</p>
<ul>
  <li style={{ width: "50%" }}>
    <a href="https://msreg.com/SVT-5-8-22">
      <span className="fa fa-globe"></span> Registration Closed
    </a>
  </li>
</ul> */
}
