// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./global.css";
import UserMenu from "./components/UserMenu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <UserMenu name="John Doe" />
  </React.StrictMode>,
);
