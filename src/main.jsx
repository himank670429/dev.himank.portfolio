import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheet/index.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import { HashRouter } from "react-router-dom";
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
