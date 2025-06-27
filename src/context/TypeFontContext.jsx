import { createContext, useEffect, useState } from "react";

export const TypeFontContext = createContext();

export function TypeFontProvider({ children }) {
  const [typeFont, setTypeFont] = useState(() => {
    return localStorage.getItem("typeFont") || "font-serif";
  });

  useEffect(() => {
    localStorage.setItem("typeFont", typeFont);
  }, [typeFont]);

  return (
    <TypeFontContext.Provider value={{ typeFont, setTypeFont }}>
      {children}
    </TypeFontContext.Provider>
  );
}
