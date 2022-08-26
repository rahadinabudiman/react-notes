import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import NotesApp from "./components/NotesApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
);
