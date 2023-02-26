import SignUpLink from "../../components/msr/signupLink";
import { monthShort } from "../../models/data/date";
import { ClubEvent } from "../../models/data/event";

export default function EventCard(props: { event: ClubEvent }) {
  var event = props.event;
  var eventDate: Date = new Date(event.startDate);

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
        <SignUpLink event={event} />
      </div>
    </li>
  );
}
