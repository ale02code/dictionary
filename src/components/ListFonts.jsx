import { useState, useContext } from "react";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import { TypeFontContext } from "../context/TypeFontContext";

const fontNames = {
  "font-serif": "serif",
  "font-sans": "sans serif",
  "font-mono": "monospace",
};

function ListFonts() {
  const { typeFont, setTypeFont } = useContext(TypeFontContext);

  const [visible, setVisible] = useState(false);
  const [currentFont, setCurrentFont] = useState(fontNames[typeFont]);

  const handleChangeFont = (id_font) => {
    setTypeFont(id_font);
    setCurrentFont(fontNames[id_font]);
  };

  return (
    <section
      className="flex gap-2 relative justify-center items-center cursor-pointer"
      onClick={() => setVisible(!visible)}
    >
      <p>{currentFont}</p>
      <img
        src={ArrowDown}
        className="h-3 w-3"
        alt="arrow-down"
        draggable="false"
      />

      <div
        className={`absolute border border-black  z-50 rounded-md bg-white transition-all duration-500 ${
          visible ? "translate-y-[65%] block" : "-translate-y-[40%] opacity-0"
        }`}
      >
        <ul
          className={
            "capitalize min-w-max px-2 py-4 dark:text-black dark:border-white"
          }
        >
          {Object.entries(fontNames).map(([id_font, label]) => (
            <li
              key={id_font}
              className="hover:cursor-pointer"
              onClick={() => {
                handleChangeFont(id_font);
                setVisible(false);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ListFonts;
