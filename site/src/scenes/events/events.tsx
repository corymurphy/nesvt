import { getEvents } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import { MsrEvents } from "../../models/data/msr";
import EventCard from "../global/eventCard";

function Events(props: {msrEvents: MsrEvents}) {
  var events: ClubEvent[] = getEvents();

  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      <div className="row">
        <div className="col-lg-12">
          <ul className="event-list">
            {events.map((event, i) => (
              <EventCard key={i} event={event} msrEvents={props.msrEvents}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
