import { useState, useEffect } from "react";
const doc = document.documentElement;

function ThemeButton() {
  let [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkTheme) {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  const changeTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <input
      type="range"
      max={1}
      defaultValue={doc.classList.contains("dark") ? 1 : 0}
      onChange={changeTheme}
      className="outline-none appearance-none cursor-pointer w-12 h-6 bg-gray-main rounded-xl px-1 
      [&::-webkit-slider-thumb]:w-4
      [&::-webkit-slider-thumb]:h-4
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:bg-white
      [&::-webkit-slider-thumb]:rounded-full
      dark:bg-purple-main"
    />
  );
}

export default ThemeButton;
