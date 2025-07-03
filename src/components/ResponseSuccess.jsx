import { useState, useEffect, useContext } from "react";

import playSound from "../assets/images/icon-play.svg";
import newWindowsIcon from "../assets/images/icon-new-window.svg";

import { SearchContext } from "../context/SearchContext";
import { WordContext } from "../context/WordContext";

function ResponseSuccess() {
  const { word } = useContext(WordContext);
  const { setSearch } = useContext(SearchContext);
  const [soundWord, setSoundWord] = useState("");

  useEffect(() => {
    if (word && word.phonetics) {
      const soundsCheck = word.phonetics.filter((item) => item.audio !== "");
      if (soundsCheck.length > 0) {
        setSoundWord(soundsCheck[0].audio);
      }
    }
  }, [word]);

  const handlePlaySound = () => {
    if (soundWord !== "") {
      let audio = new Audio(soundWord);
      audio.play();
    } else {
      console.warn("No hay URL de audio disponible.");
    }
  };

  const handleSynonym = (synonym) => {
    setSearch(synonym);
  };

  return (
    <article className="w-full">
      <header className="w-full flex justify-between items-center mb-5">
        <div>
          <strong className="text-5xl">{word?.word}</strong>
          <p className="text-2xl text-purple-main mt-2">{word?.phonetic}</p>
        </div>
        <img
          src={playSound}
          alt="play-button"
          className="cursor-pointer h-14"
          onClick={handlePlaySound}
        />
      </header>

      <section className="w-full">
        {word?.meanings.map((meaning, i) => (
          <div key={i}>
            <header className="w-full flex mb-5">
              <strong className="text-xl pr-4">{meaning.partOfSpeech}</strong>
              <div className="w-full flex justify-center items-center">
                <hr className="w-full" />
              </div>
            </header>

            <div className="w-full mb-3">
              <span className="block text-gray-main mb-2">Meaning</span>
            </div>

            <div>
              <ul>
                {meaning.definitions.map((def, i) => (
                  <li key={i} className="list-disc ml-6 text-purple-main mb-3">
                    <span className="text-black dark:text-white">
                      {def.definition}
                    </span>
                    <br />
                    <p className="text-gray-main">
                      {def.example && `"${def.example}"`}
                    </p>
                  </li>
                ))}
              </ul>

              {meaning.partOfSpeech === "noun" &&
                meaning.synonyms &&
                meaning.synonyms.length > 0 && (
                  <div className="w-full mb-5">
                    <p className="inline text-gray-main mb-2 pr-4">Synonyms</p>
                    {meaning.synonyms.map((synonym, k) => (
                      <p
                        key={k}
                        className="inline text-purple-main font-semibold cursor-pointer"
                        onClick={() => handleSynonym(synonym)}
                      >
                        {synonym}
                        {k !== meaning.synonyms.length - 1 ? ", " : "."}
                      </p>
                    ))}
                  </div>
                )}
            </div>
          </div>
        ))}

        <hr className="w-full mb-5"></hr>

        <div className="mb-5 flex justify-start items-center">
          <p className="inline pr-4">Source</p>
          <a
            href={word?.sourceUrls}
            className="underline text-sm inline-block mr-1 focus:outline-1 focus:outline-purple-main"
            target="_blank"
          >
            {word?.sourceUrls}
          </a>
          <img
            src={newWindowsIcon}
            alt="new-windows-icon"
            className="inline-block"
          />
        </div>
      </section>
    </article>
  );
}

export default ResponseSuccess;
