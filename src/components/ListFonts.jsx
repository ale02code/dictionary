import ArrowDown from "../assets/images/icon-arrow-down.svg";

function ListFonts() {
  return (
    <div className="flex gap-2">
      <p>Serif</p>
      <img src={ArrowDown} alt="arrow-down" />
    </div>
  );
}

export default ListFonts;
