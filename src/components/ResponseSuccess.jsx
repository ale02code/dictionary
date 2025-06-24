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
          {word?.phonetics.map((pho, i) => (
            <p key={i} className="text-2xl text-purple-main">
              {pho?.[1]?.text}
            </p>
          ))}
        </div>
        <img
          src={playSound}
          alt="play-button"
          className="cursor-pointer h-14"
          onClick={handlePlaySound}
        />
      </header>

      <section className="w-full">
        <header className="w-full flex mb-5">
          <strong className="text-xl pr-4">{word?.partOfSpeech}</strong>
          <div className="w-full flex justify-center items-center">
            <hr className="w-full" />
          </div>
        </header>

        <div>
          <p className="block text-gray-main mb-2">Meaning</p>
          <ul>
            {word?.definitions.map((def, i) => (
              <li key={i} className="list-disc ml-4 text-purple-main mb-3">
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

        {word?.synonyms != 0 && (
          <div className="w-full mb-5">
            <p className="inline text-gray-main mb-2 pr-4">Synonyms</p>
            <>
              {word?.synonyms.map((synonym, i) => (
                <p
                  key={i}
                  className="inline text-purple-main font-semibold cursor-pointer"
                  onClick={() => handleSynonym(synonym)}
                >
                  {synonym}
                  {i !== word.synonyms.length - 1 ? ", " : ". "}
                </p>
              ))}
            </>
          </div>
        )}

        <div className="w-full flex mb-5">
          <strong className="text-xl pr-4">{word?.partOfSpeech}</strong>
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
                <li key={i} className="list-disc ml-4 text-purple-main mb-3">
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
            target="_blank"
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
  );
}

export default ResponseSuccess;
