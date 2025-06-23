import { useState, useContext } from "react";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import { TypeFontContext } from "../context/TypeFont";

function ListFonts() {
  const { setTypeFont } = useContext(TypeFontContext);

  const [visible, setVisible] = useState(false);
  const [currentFont, setCurrentFont] = useState("serif");

  const handleChangeFont = (e) => {
    setTypeFont(e.target.id);
    setCurrentFont(e.target.innerText);
  };

  return (
    <section className="flex gap-2 relative justify-center items-center">
      <p className="hover:cursor-pointer" onClick={() => setVisible(!visible)}>
        {currentFont}
      </p>
      <img
        src={ArrowDown}
        className="hover:cursor-pointer h-3 w-3"
        alt="arrow-down"
        onClick={() => setVisible(!visible)}
      />

      <div
        className={`absolute border border-black  z-50 rounded-md bg-white transition-all duration-500 ${
          visible ? "translate-y-[35%] block" : "-translate-y-[140%]"
        }`}
      >
        <ul
          className={
            "capitalize min-w-max px-2 py-4 dark:text-black dark:border-white"
          }
        >
          <li
            id="font-serif"
            className="hover:cursor-pointer"
            onClick={(e) => {
              handleChangeFont(e);
              setVisible(false);
            }}
          >
            serif
          </li>
          <li
            id="font-sans"
            className="hover:cursor-pointer"
            onClick={(e) => {
              handleChangeFont(e);
              setVisible(false);
            }}
          >
            sans serif
          </li>
          <li
            id="font-mono"
            className="hover:cursor-pointer"
            onClick={(e) => {
              handleChangeFont(e);
              setVisible(false);
            }}
          >
            monospace
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ListFonts;
