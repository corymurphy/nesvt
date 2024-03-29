import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Success from "./success";
import Error from "./error";

export default function Contact() {
  const [showError, setShowError] = useState(
    location.hash.includes("result=error")
  );
  const [showSuccess, setShowSuccess] = useState(
    location.hash.includes("result=success")
  );

  useEffect(() => {
    grecaptcha.ready(function () {
      try {
        grecaptcha.render("recaptcha-container", {
          sitekey: "6Lf2V04UAAAAAKv74ndYKz_QcK3wmF2d-yLEpe9Y",
        });
      } catch {}
    });
  }, []);

  return (
    <div className="container" style={{ padding: "20px" }}>
      {showSuccess ? <Success /> : <></>}

      {showError ? <Error /> : <></>}

      <div
        className="col-md-12"
        style={{ paddingRight: "0px", paddingLeft: "0px" }}
      >
        <div className="bd-example">
          <div className="card">
            <div className="card-header">Please complete the form below</div>
            <div className="card-body">
              <form method="post" action="contact.php" acceptCharset="utf-8">
                <Row style={{ paddingBottom: "10px" }}>
                  <div className="form-group col-md-6">
                    <label htmlFor="givenname">Firstname</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Lastname</label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                    />
                  </div>
                </Row>

                <Row style={{ paddingBottom: "10px" }}>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      name="telephone"
                      placeholder="Phone"
                    />
                  </div>
                </Row>

                <div className="form-group" style={{ paddingBottom: "10px" }}>
                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    name="comments"
                    rows={3}
                  ></textarea>
                </div>

                <Row style={{ paddingBottom: "10px" }}>
                  <div className="form-group col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="info"
                        // value="true"
                        defaultChecked={true}
                      />
                      <label
                        htmlFor="inputEmail4"
                        style={{ paddingTop: "5px" }}
                      >
                        Send me more information
                      </label>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label
                      htmlFor="inputPassword4"
                      style={{ marginRight: "10px" }}
                    >
                      Contact Preference:{" "}
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contact"
                        value="email"
                        defaultChecked={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Email
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contact"
                        value="phone"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Phone
                      </label>
                    </div>
                  </div>
                </Row>

                <Row>
                  <div id="recaptcha-container"></div>
                </Row>

                <Row style={{ paddingTop: "15px" }}>
                  <button type="submit" className="btn btn-primary nesvt-btn">
                    Submit
                  </button>
                </Row>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script
        async
        defer
        src="https://www.google.com/recaptcha/api.js?onloadCallback=onloadCallback"
      ></script>
    </div>
  );
}
