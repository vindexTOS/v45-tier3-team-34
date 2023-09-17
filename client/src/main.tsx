// import React from "react";
import ReactDOM from "react-dom/client";
import "../src/globals.css";
import { ContextProvider } from "./context.tsx";
//del hash router , updated with createBrowserRouter in App
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import ScrollToTop from "./components/Buttons/ScrollToTop";

//routes

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <HashRouter>
    <ContextProvider>
      <App />
      <ScrollToTop />
    </ContextProvider>
  </HashRouter>
);
