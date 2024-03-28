import { useEffect, useState } from "react";
import parseDate from "../../components/parse/datetime";
import { defaultMembership } from "../../data/events";
import { MsrEvent, MsrEvents } from "../../models/data/msr";

export default function MembershipCard(props: { msrEvents: MsrEvents }) {
  var msrLink: string =
    "https://www.motorsportreg.com/events/ne-svt-2024-membership-devens-airfield-701754";

  let membershipEvent;

  if (props.msrEvents == null) {
    membershipEvent = defaultMembership();
  }

  function getMembershipEvent(msrEvents: MsrEvents): {} {
    let now = new Date();
    let foundEvent;

    if (msrEvents == null) {
      return defaultMembership();
    }

    if (!msrEvents.hasOwnProperty("recordset")) {
      return defaultMembership();
    }

    if (msrEvents.recordset.total == 0) {
      return defaultMembership();
    }

    if (!msrEvents.hasOwnProperty("events")) {
      return defaultMembership();
    }

    msrEvents.events.forEach((msrEvent: MsrEvent) => {
      if (msrEvent.type != "Membership") {
        return;
      }
      // now.getFullYear()
      // var msrDate = new Date(msrEvent.start);
      if (parseDate(msrEvent.start).getFullYear() == now.getFullYear()) {
        foundEvent = msrEvent;
      }
    });

    return defaultMembership();
  }

  return (
    <>
      <li>
        <time dateTime={new Date().getFullYear().toString()}>
          <span className="year">{new Date().getFullYear()}</span>
        </time>
        <div className="info">
          <h2 className="title">
            NE-SVT {new Date().getFullYear()} Membership
          </h2>

          <ul>
            <li style={{ width: "50%" }}>
              <a href={msrLink}>
                <span className="fa fa-globe"></span> MotorsportReg Signup
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}
