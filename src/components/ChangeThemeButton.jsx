function ChangeThemeButton() {
  const root = document.querySelector("#root");

  const changeTheme = () => {
    root.classList.toggle("dark");
  };

  return (
    <input
      type="range"
      max={1}
      defaultValue={root.classList.contains("dark") ? 1 : 0}
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

export default ChangeThemeButton;
