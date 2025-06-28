export function fadeIn() {
  setTimeout(() => {
    document.body.classList.remove("opacity-0");
    document.body.classList.add("transition-opacity");
  }, 500);
}