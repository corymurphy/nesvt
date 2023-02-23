import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap';


import '@fortawesome/react-fontawesome';
import 'react-popper';

import "./css/global.css";
import "./css/eventlist.css";
import "./css/gallery-grid.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
