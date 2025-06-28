import bookImg from "../assets/images/book.svg";
import themeImg from "../assets/images/icon-moon.svg";

import ListFonts from "./ListFonts";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center mb-5">
        <div>
          <img
            src={bookImg}
            alt="book"
            // TODO: cursor-pointer
            className="focus:outline-1 focus:outline-purple-main h-10 w-10"
            tabIndex={1}
            draggable="false"
          />
        </div>
        <div className="h-full flex justify-center items-center gap-2">
          <div className="h-9 w-28 border-r-2 border-r-gray-300 pr-2 flex justify-center items-center">
            <ListFonts />
          </div>
          <div
            className="focus:outline-1 focus:outline-purple-main flex"
            tabIndex={3}
          >
            <ThemeButton />
          </div>
          <img
            src={themeImg}
            alt="theme image"
            className="focus:outline-1 focus:outline-purple-main h-6 w-6"
            tabIndex={4}
            draggable="false"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
