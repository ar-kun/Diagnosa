import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./assets/css/index.css";
import "./assets/css/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
