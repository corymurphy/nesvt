import { getEvents } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import EventCard from "../global/eventCard";

function Events() {
  var events: ClubEvent[] = getEvents();

  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      <div className="row">
        <div className="col-lg-12">
          <ul className="event-list">
            {events.map((event) => (
              <EventCard event={event} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
