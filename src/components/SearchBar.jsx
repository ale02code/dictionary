import searchImg from "../assets/images/icon-search.svg";
import { useContext } from "react";
import { SearchContext } from "../context/Search";

function SearchBar({ text }) {
  const { setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="w-full flex justify-start items-center relative mb-4">
      <input
        type="text"
        // name=""
        // id=""
        placeholder={text}
        className="w-90 outline-none bg-neutral-200 text-xl py-2 px-3 rounded-l-xl"
        spellCheck="false"
        onChange={handleSearch}
      />
      <div className="h-full flex justify-center items-center absolute right-0 bg-neutral-200 w-[11%] rounded-r-xl z-10">
        <img src={searchImg} alt="search-icon" />
      </div>
    </section>
  );
}

export default SearchBar;
