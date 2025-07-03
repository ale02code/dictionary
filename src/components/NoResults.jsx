import notFoundImg from "../assets/images/search-not-found.svg";

function NoResults() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">No results found</h1>
      <img
        className="w-4/5 h-max md:max-w-md"
        src={notFoundImg}
        alt="word not found image"
        draggable="false"
      />
    </div>
  );
}

export default NoResults;
