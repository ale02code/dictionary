import React from "react";
import bookImg from "../assets/images/book.svg";
import moonImgTheme from "../assets/images/icon-moon.svg";

import ListFonts from "./ListFonts";
import ChangeThemeButton from "./ChangeThemeButton";

// preference Theme
import { prefersScheme } from "../utils/prefersScheme";

function Header() {
  prefersScheme();

  return (
    <>
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
    </>
  );
}

export default Header;
