import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/main.css";
import Header from "./components/header";
import Landing from "./pages/landing";
import RoadmapSection from "./components/roadmap";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Landing />
  </>
);
