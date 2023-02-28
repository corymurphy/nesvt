import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ClubEvent } from "./models/data/event";
import { MsrEvents } from "./models/data/msr";
import Contact from "./scenes/contact/contact";
import Events from "./scenes/events/events";
import Faq from "./scenes/faq/faq";
import Gallery from "./scenes/gallery/gallery";

import Header from "./scenes/global/header";
import HelmetAlert from "./scenes/global/helmetAlert";
import Home from "./scenes/home/home";
import Results from "./scenes/results/Results";

function App() {
  const [events, setEvents] = useState<MsrEvents >({} as MsrEvents);

  function end(): string {
    var d = new Date();
    var year = d.getFullYear();
    var month = 1
    var day = 1
    return new Date(year + 1, month, day).toISOString().split("T")[0];
  }

  function start(): string {
    var d = new Date();
    var year = d.getFullYear();
    var month = 1
    var day = 1
    return new Date(year - 1, month, day).toISOString().split("T")[0];
  }

  function eventsPath(): string {
    return `./data/events_2022_2024.json`
    // return `http://localhost:5173/data/events_2022_2024.json`
    // return `https://api.motorsportreg.com/rest/calendars/organization/F9EADF5D-F9F5-4B6C-4951013B365A2F87.json?archive=true&start=${start()}&end=${end()}`;
  }

  var opts = {
    headers: {
      "accept": "application/vnd.pukkasoft+json"
    }
  }

  useEffect(() => {
    fetch(eventsPath(), opts)
      .then((response) => response.json())
      .then((data) => setEvents(data.response))
  }, []);

  return (
    <>
      {useLocation().pathname !== "/results" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home msrEvents={events}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events msrEvents={events}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {useLocation().pathname !== "/results" ? <HelmetAlert /> : null}
    </>
  );
}

export default App;
