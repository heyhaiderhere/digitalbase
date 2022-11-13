import { StrictMode } from "react";
import { createRoot as Root } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

Root(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
