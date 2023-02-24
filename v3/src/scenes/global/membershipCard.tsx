import { useEffect, useState } from "react";

export default function MembershipCard() {
  var msrLink: string =
    "https://www.motorsportreg.com/events/ne-svt-2023-membership-devens-airfield-785736";

  return (
    <>
      {" "}
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
