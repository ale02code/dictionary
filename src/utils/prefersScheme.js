"use strict"

//check what's your scheme preference
export function prefersScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.remove('dark');
  } else {
    console.info('El navegador no soporta la propiedad prefers-color-scheme');
  }
}