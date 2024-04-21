import { useEffect, useState, useContext } from "react";

import ChangeThemeButton from "./components/ChangeThemeButton";
import ListFonts from "./components/ListFonts";
import SearchBar from "./components/SearchBar";
import bookImg from "./assets/images/book.svg";
import moonImgTheme from "./assets/images/icon-moon.svg";
import waitingSearch from "./assets/images/wait-search.svg";
import { SearchContext } from "./context/Search";
import { TypeFontContext } from "./context/TypeFont";
import { prefersScheme } from "./utils/prefersScheme";

import playSound from "./assets/images/icon-play.svg";

import newWindowsIcon from "./assets/images/icon-new-window.svg";

import { getWord } from "./services/dictionary";

// style for loeader
import "./assets/styles/loader.css";

function App() {
  prefersScheme();
  const { search } = useContext(SearchContext);
  const { typeFont } = useContext(TypeFontContext);

  const [word, setWord] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [soundWord, setSoundWord] = useState("");

  useEffect(() => {
    setIsloading(true);
    async function fetchData() {
      try {
        const response = await getWord(search);
        setWord(response);
        setIsloading(false);
      } catch (e) {
        // ! TODO add section for show no results
        // <div className="w-full flex flex-col justify-center items-center gap-4">
        //   <h1 className="text-4xl font-bold">No results found</h1>
        // </div>;
        throw new Error("fail");
      }
    }

    fetchData();
  }, [search]);

  useEffect(() => {
    if (word && word.phonetics) {
      const soundsCheck = word.phonetics.filter((item) => item.audio !== "");
      if (soundsCheck.length > 0) {
        setSoundWord(soundsCheck[0].audio);
      }
    }
  }, [word]);

  const handlePlaySound = () => {
    let audio = new Audio(soundWord);
    audio.play();
  };

  return (
    <div
      className={`min-h-screen w-screen flex justify-center items-start dark:bg-black ${typeFont}`}
    >
      <main className="h-full w-90 max-w-2xl py-8 flex flex-col items-center dark:text-white overflow-hidden">
        <header className="w-full flex justify-between items-center mb-5">
          <div>
            <img
              src={bookImg}
              alt="book"
              className="focus:outline-1 focus:outline-purple-main"
              tabIndex={1}
            />
          </div>
          <div className="h-full flex justify-center items-center gap-2">
            <div className="h-9 w-28 border-r-2 border-r-gray-300 pr-2 flex justify-center items-center">
              <ListFonts />
            </div>
            <div
              className="focus:outline-1 focus:outline-purple-main"
              tabIndex={3}
            >
              <ChangeThemeButton />
            </div>
            <img
              src={moonImgTheme}
              alt="moon-theme"
              className="focus:outline-1 focus:outline-purple-main"
              tabIndex={4}
            />
          </div>
        </header>
        <SearchBar text="keyboard..." />
        {search == "" ? (
          <div className="w-90 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold">Search a word</h1>
            <img
              src={waitingSearch}
              alt="Waiting search"
              className="md:max-w-md"
            />
          </div>
        ) : (
          <>
            {isloading ? (
              <div className="loader"></div>
            ) : (
              <section className="w-full flex flex-col justify-center items-start overflow-hidden">
                <article className="w-full">
                  <header className="w-full flex justify-between items-center mb-5">
                    <div>
                      <strong className="text-5xl">{word?.word}</strong>
                      {word?.phonetics.map((pho, i) => {
                        <p key={i} className="text-2xl text-purple-main">
                          {pho?.[1]?.text}
                        </p>;
                      })}
                    </div>
                    <img
                      src={playSound}
                      alt="play"
                      className="cursor-pointer h-14"
                      onClick={handlePlaySound}
                    />

                    {console.log(word)}
                  </header>

                  <section className="w-full">
                    <header className="w-full flex mb-5">
                      <strong className="text-xl pr-4">
                        {word?.partOfSpeech}
                      </strong>
                      <div className="w-full flex justify-center items-center">
                        <hr className="w-full" />
                      </div>
                    </header>

                    <div>
                      <p className="block text-gray-main mb-2">Meaning</p>
                      <ul>
                        {word?.definitions.map((def, i) => (
                          <li
                            key={i}
                            className="list-disc ml-4 text-purple-main mb-3"
                          >
                            <span className="text-black dark:text-white">
                              {def.definition}
                            </span>
                            <br></br>
                            <p className="text-gray-main">
                              {def.example && `"${def.example}"`}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full mb-5">
                      <p className="inline text-gray-main mb-2 pr-4">
                        Synonyms
                      </p>
                      <>
                        {word?.synonyms.map((syn, i) => (
                          <p
                            key={i}
                            className="inline text-purple-main font-semibold"
                          >
                            {syn}
                            {i !== word.synonyms.length - 1 ? ", " : ". "}
                          </p>
                        ))}
                      </>
                    </div>

                    <div className="w-full flex mb-5">
                      <strong className="text-xl pr-4">
                        {word?.partOfSpeech}
                      </strong>
                      <div className="w-full flex justify-center items-center">
                        <hr className="w-full" />
                      </div>
                    </div>

                    <div>
                      <p className="block text-gray-main mb-2">Meaning</p>
                      <ul>
                        {word &&
                          word.definitions &&
                          word.definitions.map((def, i) => (
                            <li
                              key={i}
                              className="list-disc ml-4 text-purple-main mb-3"
                            >
                              <span className="text-black dark:text-white">
                                {def.definition}
                              </span>
                              <br></br>
                              <p className="text-gray-main">
                                {def.example && `"${def.example}"`}
                              </p>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <hr className="w-full mb-5"></hr>

                    <div className="mb-5 flex justify-start items-center">
                      <p className="inline pr-4">Source</p>
                      <a
                        href={word?.sourceUrls[0]}
                        className="underline text-sm inline-block mr-1 focus:outline-1 focus:outline-purple-main"
                      >
                        {word?.sourceUrls[0]}
                      </a>
                      <img
                        src={newWindowsIcon}
                        alt="new-windows-icon"
                        className="inline-block"
                      />
                    </div>
                  </section>
                </article>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
