import { ClubEvent } from "../../models/data/event";

export default function SignUpLink(props: { event: ClubEvent }) {
  return (
    <>
      <p className="desc">Registration will open 30 days prior.</p>
      <ul>
        <li style={{ width: "50%" }}>
          <a href="#website">
            <span className="fa fa-globe"></span> Event signup coming soon
          </a>
        </li>
      </ul>
    </>
  );
}


{/* <p className="desc">Registration open now!</p>
<ul>
  <li style={{ width: "50%" }}>
    <a href="https://msreg.com/SVT-6-18-22">
      <span className="fa fa-globe"></span> MotorsportReg Event
      Signup
    </a>
  </li>
</ul> */}



{/* <p className="desc">Registration Closed</p>
<ul>
  <li style={{ width: "50%" }}>
    <a href="https://msreg.com/SVT-5-8-22">
      <span className="fa fa-globe"></span> Registration Closed
    </a>
  </li>
</ul> */}
