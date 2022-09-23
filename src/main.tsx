import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.ts"; // Global CSS Styles

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);