import { useEffect, useState, useContext } from "react";

import ChangeThemeButton from "./components/ChangeThemeButton";
import ListFonts from "./components/ListFonts";
import SearchBar from "./components/SearchBar";
import bookImg from "./assets/images/book.svg";
import moonImgTheme from "./assets/images/icon-moon.svg";
import { SearchContext } from "./context/Search";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const { search } = useContext(SearchContext);

  useEffect(() => {
    fetch(API_URL + search)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [search]);

  return (
    <main className="h-full w-90 py-8 flex flex-col items-center">
      <header className="w-full h-16 flex justify-between items-center mb-3">
        <div>
          <img src={bookImg} alt="book" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <ListFonts />
          <ChangeThemeButton />
          <img src={moonImgTheme} alt="moon-theme" />
        </div>
      </header>

      <SearchBar text="keyboard..." />
    </main>
  );
}

export default App;
