import { getEvents } from "../../data/events";
import { ClubEvent } from "../../models/data/event";
import EventCard from "../global/eventCard";

function Events(props: {msrEvents: any}) {
  var events: ClubEvent[] = getEvents();

  // if (props.msrEvents != null) {
  //   console.log(props.msrEvents.response)
  // }

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
