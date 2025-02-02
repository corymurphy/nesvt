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
      startDate: "2025-04-12T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#2",
      startDate: "2025-04-19T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#3",
      startDate: "2025-04-20T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#4",
      startDate: "2025-05-17T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#5",
      startDate: "2025-06-01T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#6",
      startDate: "2025-06-15T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#7",
      startDate: "2025-06-28T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#8",
      startDate: "2025-07-06T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#9",
      startDate: "2025-07-12T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#10",
      startDate: "2025-07-27T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#11",
      startDate: "2025-08-09T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#12",
      startDate: "2025-09-06T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#13",
      startDate: "2025-09-14T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#14",
      startDate: "2025-10-05T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#15",
      startDate: "2025-10-25T00:00:00.000",
    },
    {
      type: "autocross",
      name: "#16",
      startDate: "2025-11-01T00:00:00.000",
    },
  ];
}

export function defaultMembership(): MsrEvent {
  return {
    detailuri:  "https://www.motorsportreg.com/events/ne-svt-2025-membership-devens-airfield-012532",
    name: "NE-SVT 2025 Membership",
    start: "2025-01-01",
    type: "Membership"
  }
}
