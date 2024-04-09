"use strict"

//Verifica si existe el atributo prefers-color-scheme en el navegador y si el usuario tiene una preferencia se vera reflejada la apariencia

export function prefersScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.remove('dark');
  } else {
    console.info('El navegador no soporta la propiedad prefers-color-scheme o el usuario no tiene una preferencia establecida.');
  }
}