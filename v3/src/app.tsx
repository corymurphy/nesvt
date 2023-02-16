// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Events from "./scenes/events/events";
import Faq from "./scenes/faq/faq";
import Gallery from "./scenes/gallery/gallery";

import Header from "./scenes/global/header";
// import Header2 from "./scenes/global/header";
import Home from "./scenes/home/home";
import Results from "./scenes/results/Results";

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(()=>
  // { 
  //     if(useLocation().pathname == '/about'){
        
  //     }
  // }
  // },[useLocation()]);


  return (
    <>
      {/* {useLocation().pathname !== "/results" ? <Header /> : null} */}
      {useLocation().pathname !== "/results" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<Faq/> } />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
