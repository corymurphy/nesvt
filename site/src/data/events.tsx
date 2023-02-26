import { ClubEvent } from "../models/data/event";

function sortByDate(a: ClubEvent, b: ClubEvent): number {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

export function nextEvent(): ClubEvent {
  var events: ClubEvent[] = getEvents().sort(sortByDate);
  var now: Date = new Date();

  events.forEach((event, i, arr) => {
    var eventDate = new Date(event.startDate);
    if (eventDate > now) {
      return event;
    }
  });

  return events[events.length - 1];
}

export function getEvents(): ClubEvent[] {
  return [
    {
      type: "autocross",
      name: "#1",
      startDate: "2023-04-15T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#2",
      startDate: "2023-05-14T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#3",
      startDate: "2023-06-17T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#4",
      startDate: "2023-07-23T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#5",
      startDate: "2023-09-02T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#6",
      startDate: "2023-10-07T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#7",
      startDate: "2023-10-22T00:00:00.000",
    },
  ];
}

export function defaultMembership(): {} {
  return {
    detailuri:  "https://www.MotorsportReg.com/events/ne-svt-2023-membership-devens-airfield-785736?utm_source=apis&utm_medium=apim&utm_campaign=apic&utm_content=json",
    name: "NE-SVT 2023 Membership",
    start: "2023-01-01"
  }
}
