import waitingSearch from "../assets/images/wait-search.svg";

function SearchText() {
  return (
    <div className="w-90 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Search a word</h1>
      <img
        src={waitingSearch}
        alt="Waiting search"
        className="w-4/5 h-max md:max-w-md"
        draggable="false"
      />
    </div>
  );
}

export default SearchText;
