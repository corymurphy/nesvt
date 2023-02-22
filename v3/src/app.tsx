import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ClubEvent } from "./models/data/event";
import Contact from "./scenes/contact/contact";
import Events from "./scenes/events/events";
import Faq from "./scenes/faq/faq";
import Gallery from "./scenes/gallery/gallery";

import Header from "./scenes/global/header";
import Home from "./scenes/home/home";
import Results from "./scenes/results/Results";

function App() {
  return (
    <>
      {useLocation().pathname !== "/results" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
