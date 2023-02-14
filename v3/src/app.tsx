// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { Routes, Route } from "react-router-dom";
import Gallery from "./scenes/gallery/gallery";

import Header from "./scenes/global/header";
import Home from "./scenes/home/home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
