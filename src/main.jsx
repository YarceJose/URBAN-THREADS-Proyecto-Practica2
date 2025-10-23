import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./RouterApp";

// 🏁 Punto de entrada de la aplicación React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

