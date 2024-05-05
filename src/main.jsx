import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./context/Search";
import { TypeFontProvider } from "./context/TypeFont";
import { WordContextProvider } from "./context/WordContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <SearchProvider>
      <TypeFontProvider>
        <WordContextProvider>
          <App />
        </WordContextProvider>
      </TypeFontProvider>
    </SearchProvider>
  </React.StrictMode>
);
