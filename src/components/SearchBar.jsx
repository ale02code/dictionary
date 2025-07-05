import { useState, useContext } from "react";

import searchImg from "../assets/images/icon-search.svg";
import { SearchContext } from "../context/SearchContext";

function SearchBar({ text }) {
  const { setSearch } = useContext(SearchContext);

  const [wordValue, setWordValue] = useState("");

  const handleChangeWord = (e) => {
    setWordValue(e.target.value);
  };

  const handleSendWord = () => {
    setSearch(wordValue);
    setWordValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendWord();
  };

  return (
    <section
      className="w-[calc(100%-5px)] flex justify-start items-center relative mb-4 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
      tabIndex={4}
    >
      <div className="h-full w-full relative">
        <input
          type="text"
          placeholder={text}
          id="search-bar"
          className="w-full outline-5 text-xl py-4 px-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 focus:outline-purple-main dark:focus:outline-white"
          spellCheck="false"
          autoFocus
          onChange={handleChangeWord}
          onKeyDown={handleKeyDown}
          value={wordValue}
        />

        <img
          src={searchImg}
          alt="search-icon"
          onClick={handleSendWord}
          className="cursor-pointer h-5 w-5 absolute top-1/2 right-5 transform -translate-y-1/2 bg-neutral-200 dark:bg-neutral-800"
        />
      </div>
    </section>
  );
}

export default SearchBar;
