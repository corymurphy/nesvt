import { ClubEvent } from "../models/data/event";
import { MsrEvent } from "../models/data/msr";

function sortByDate(a: ClubEvent, b: ClubEvent): number {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();  
}

export function nextEvent(): ClubEvent {
  var events: ClubEvent[] = getEvents().sort(sortByDate);
  var now: Date = new Date();

  for (let i = events.length - 1; i >= 0; i--) {
    let event = events[i]

    if (new Date(event.startDate) > now) {
      console.log(event)
      return event
    }
  }
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

export function defaultMembership(): MsrEvent {
  return {
    detailuri:  "https://www.MotorsportReg.com/events/ne-svt-2023-membership-devens-airfield-785736?utm_source=apis&utm_medium=apim&utm_campaign=apic&utm_content=json",
    name: "NE-SVT 2023 Membership",
    start: "2023-01-01",
    type: "Membership"
  }
}
