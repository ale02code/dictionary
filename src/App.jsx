import { useEffect, useState, useContext } from "react";

// Components imports
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchText from "./components/SearchText";
import ResponseSuccess from "./components/ResponseSuccess";
import NoResults from "./components/NoResults";
import Loader from "./components/Loader";

// Contexts imports
import { SearchContext } from "./context/SearchContext";
import { TypeFontContext } from "./context/TypeFontContext";
import { WordContext } from "./context/WordContext";

// Services imports
import { getWord } from "./services/dictionary";

// Utils imports
// import { prefersScheme } from "./utils/prefersScheme";
import { fadeIn } from "./utils/fadeIn";

function App() {
  const { search } = useContext(SearchContext);
  const { typeFont } = useContext(TypeFontContext);
  const { setWord } = useContext(WordContext);

  const [isloading, setIsloading] = useState(false);
  const [errorWord, setErrorWord] = useState(false);

  useEffect(() => {
    // prefersScheme();
    fadeIn();
  }, []);

  useEffect(() => {
    setErrorWord(false);
    setIsloading(true);
    async function fetchData() {
      try {
        const response = await getWord(search);
        setWord(response);
        setErrorWord(false);
        setIsloading(false);
      } catch (e) {
        setErrorWord(true);
        setIsloading(false);
        throw new Error("fail");
      }
    }

    fetchData();
  }, [search]);

  return (
    <div
      className={`min-h-screen w-screen flex justify-center items-start dark:bg-black ${typeFont}`}
    >
      <main className="h-full w-90 max-w-2xl py-8 flex flex-col items-center dark:text-white overflow-hidden">
        <Header />
        <SearchBar text="keyboard..." />
        {search == "" ? (
          <SearchText />
        ) : (
          <>
            {isloading ? (
              <Loader />
            ) : (
              <section className="w-full flex flex-col justify-center items-start overflow-hidden">
                {errorWord ? <NoResults /> : <ResponseSuccess />}
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
