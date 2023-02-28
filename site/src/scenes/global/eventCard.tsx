import SignUpLink from "../../components/msr/signupLink";
import parseDate from "../../components/parse/datetime";
import { monthShort } from "../../models/data/date";
import { ClubEvent } from "../../models/data/event";
import { MsrEvents } from "../../models/data/msr";

export default function EventCard(props: { event: ClubEvent, msrEvents: MsrEvents }) {
  var event = props.event;
  var eventDate: Date = parseDate(event.startDate);

  return (
    <li>
      <time dateTime={event.startDate}>
        <span className="day">{eventDate.getDate()}</span>
        <span className="month">{monthShort(eventDate)}</span>
      </time>
      <div className="info">
        <h2 className="title">
          NE-SVT Autocross {event.name} - {eventDate.toDateString()}
        </h2>
        <SignUpLink event={event} msrEvents={props.msrEvents} />
      </div>
    </li>
  );
}
