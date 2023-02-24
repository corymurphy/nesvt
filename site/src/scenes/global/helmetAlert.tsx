import { useState } from "react";

export default function HelmetAlert() {
  const [showHelmet, setShowHelmet] = useState(
    window.localStorage.getItem("helmetDismissed") == null || false
  );

  const dismiss = () => {
    window.localStorage.setItem("helmetDismissed", "true");
    setShowHelmet(false);
    console.log("hello world");
  };

  return (
    <>
      {showHelmet && (
        <div className="alert-bottom alert alert-danger" id="helmetAlert">
          <a
            href="#"
            className="close"
            data-dismiss="alert"
            aria-label="close"
            onClick={dismiss}
          >
            &times;
          </a>
          <strong>REMINDER</strong> -- All helmets must be Snell M2015 / SA2015
          or newer.
        </div>
      )}
    </>
  );
}
