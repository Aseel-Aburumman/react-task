import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./aos.css";
import "./bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";

const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "/font-awesome-4.7.0/css/font-awesome.min.css";
document.head.appendChild(fontAwesomeLink);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
