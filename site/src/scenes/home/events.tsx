import { getEvents, nextEvent } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import EventCard from "../global/eventCard";
import MembershipCard from "../global/membershipCard";
import { MsrEvents } from "../../models/data/msr";

function Events(props: { msrEvents: MsrEvents }) {
  var event: ClubEvent = nextEvent();

  return (
    <>
      <div className="col-md-6">
        <ul className="event-list">
          <MembershipCard msrEvents={props.msrEvents} />
          <EventCard event={event} msrEvents={props.msrEvents} />
        </ul>

        <p>
          <a
            className="btn btn-primary"
            href="./#/events"
            style={{ width: "100%" }}
            role="button"
          >
            View More Events
          </a>
        </p>
      </div>
    </>
  );
}

export default Events;
