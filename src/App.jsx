import { useEffect, useState, useContext } from "react";

import ChangeThemeButton from "./components/ChangeThemeButton";
import ListFonts from "./components/ListFonts";
import SearchBar from "./components/SearchBar";
import bookImg from "./assets/images/book.svg";
import moonImgTheme from "./assets/images/icon-moon.svg";
import waitingSearch from "./assets/images/wait-search.svg";
import { SearchContext } from "./context/Search";

import playSound from "./assets/images/icon-play.svg";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  // const { search } = useContext(SearchContext);

  const [word, setWord] = useState([]);

  {
    /* TODO: fix a bug with search */
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(API_URL + "keyboard")
        .then((res) => res.json())
        .then((data) => {
          setWord(data);
          console.log(data.slice(0, 1));
        });
    }, 1000);
  }, []);

  return (
    <main className="h-full w-90 py-8 flex flex-col items-center">
      <header className="w-full flex justify-between items-center mb-4">
        <div>
          <img src={bookImg} alt="book" />
        </div>
        <div className="h-full flex justify-center items-center gap-2">
          <div className="h-9 border-r-2 border-r-gray-300 pr-2 flex justify-center items-center">
            <ListFonts />
          </div>
          <ChangeThemeButton />
          <img src={moonImgTheme} alt="moon-theme" />
        </div>
      </header>

      <SearchBar text="keyboard..." />

      {/* TODO: fix a bug with search */}
      {/* {search == "" ? (
        <div className="w-90 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold">Search a word</h1>
          <img src={waitingSearch} alt="Waiting search" />
        </div>
      ) : (
        <section className="w-full flex flex-col justify-center items-start">
          {word.slice(0, 1).map((word, i) => (
            <article key={i}>
              <header>
                <strong className="text-4xl">{word.word}</strong>
              </header>
            </article>
          ))}
        </section>
      )} */}

      <section className="w-full flex flex-col justify-center items-start">
        {word.slice(0, 1).map((word, i) => (
          <article key={i} className="w-full">
            <header className="w-full flex justify-between items-center mb-4">
              <div>
                <strong className="text-5xl">{word.word}</strong>
                <p className="text-2xl text-purple-main">
                  {word.phonetics[1].text}
                </p>
              </div>
              <img src={playSound} alt="play" className="cursor-pointer h-14" />
            </header>

            <section className="w-full">
              <header className="w-full flex mb-4">
                <strong className="text-xl pr-4">
                  {word.meanings[0].partOfSpeech}
                </strong>
                <div className="w-full flex justify-center items-center">
                  <hr className="w-full" />
                </div>
              </header>

              <div>
                <p className="block text-gray-main mb-2">Meaning</p>
                <ul>
                  {word.meanings[0].definitions.map((def, i) => (
                    <li
                      key={i}
                      className="list-disc ml-4 text-purple-main mb-3"
                    >
                      <span className="text-black">{def.definition}</span>
                      <br></br>
                      {/* TODO: check if exist a example for this definition to agree a symbol */}
                      <p className="text-gray-main">{def.example}</p>
                    </li>
                  ))}
                </ul>
                {console.log(word.meanings[0].synonyms[0])}
              </div>

              <div className="w-full mb-4">
                <p className="inline text-gray-main mb-2 pr-4">Synonyms</p>
                {word.meanings[0].synonyms.map((syn, i) => (
                  <p key={i} className="inline text-purple-main font-semibold">
                    {syn}
                  </p>
                ))}
              </div>

              <div className="w-full flex mb-4">
                <strong className="text-xl pr-4">
                  {word.meanings[1].partOfSpeech}
                </strong>
                <div className="w-full flex justify-center items-center">
                  <hr className="w-full" />
                </div>
              </div>

              <div>
                <p className="block text-gray-main mb-2">Meaning</p>
                <ul>
                  {word.meanings[1].definitions.map((def, i) => (
                    <li
                      key={i}
                      className="list-disc ml-4 text-purple-main mb-3"
                    >
                      <span className="text-black">{def.definition}</span>
                      <br></br>
                      <p className="text-gray-main">{`"${def.example}"`}</p>
                    </li>
                  ))}
                </ul>
                {console.log(word.meanings[0].synonyms[0])}
              </div>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
