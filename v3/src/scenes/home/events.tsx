function Events() {
  return (
    <>
      <div className="col-md-6">
        <ul className="event-list">
          <li>
            <time dateTime="2022-06-18 0000">
              <span className="day">18</span>
              <span className="month">Jun</span>
            </time>
            <div className="info">
              <h2 className="title">NE-SVT Autocross #3 - Sat, Jun 18, 2022</h2>
              <p className="desc">Registration open now!</p>
              {/* <!-- <p class="desc">Registration will open 30 days prior.</p> --> */}
              <ul>
                <li style={{ width: "50%" }}>
                  <a href="https://www.motorsportreg.com/events/ne-svt-autocross-june-18th-2022-devens-airfield-035871">
                    <span className="fa fa-globe"></span> MotorsportReg Event
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <p>
          <a
            className="btn btn-primary"
            href="./events"
            style={{ width: "100%" }}
            role="button"
          >
            View More Events
          </a>
        </p>
      </div>
    </>
  );
}

export default Events;
