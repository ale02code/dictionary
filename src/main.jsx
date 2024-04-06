import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./context/Search";
import { TypeFontProvider } from "./context/TypeFont";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <SearchProvider>
      <TypeFontProvider>
        <App />
      </TypeFontProvider>
    </SearchProvider>
  </React.StrictMode>
);
