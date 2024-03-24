import searchImg from "../assets/images/icon-search.svg";
import { useContext } from "react";
import { SearchContext } from "../context/Search";

function SearchBar({ text }) {
  const { setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="w-full flex justify-start items-center relative">
      <input
        type="text"
        name=""
        id=""
        placeholder={text}
        className="w-90 outline-none bg-neutral-200 text-xl p-2 rounded-l-xl"
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
