import { getEvents, nextEvent } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import { monthShort } from "../../models/data/date";
import SignUpLink from "../../components/msr/signupLink";
import EventCard from "../global/eventCard";

function Events() {
  var events: ClubEvent[] = getEvents();
  var event: ClubEvent = nextEvent();
  var eventDate: Date = new Date(event.startDate);

  return (
    <>
      <div className="col-md-6">
        <ul className="event-list">
          <EventCard event={event}/>
        </ul>

        <p>
          <a
            className="btn btn-primary"
            href="./events"
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
