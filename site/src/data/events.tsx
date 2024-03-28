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
      startDate: "2024-04-20T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#2",
      startDate: "2024-06-02T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#3",
      startDate: "2024-06-22T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#4",
      startDate: "2024-07-28T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#5",
      startDate: "2024-08-31T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#6",
      startDate: "2024-10-12T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#7",
      startDate: "2024-10-27T00:00:00.000",
    },
  ];
}

export function defaultMembership(): MsrEvent {
  return {
    detailuri:  "https://www.motorsportreg.com/events/ne-svt-2024-membership-devens-airfield-701754?utm_source=apis&utm_medium=apim&utm_campaign=apic&utm_content=json",
    name: "NE-SVT 2024 Membership",
    start: "2024-01-01",
    type: "Membership"
  }
}
