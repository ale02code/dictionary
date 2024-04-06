import React, { createContext, useState } from "react";

export const TypeFontContext = createContext();

export function TypeFontProvider({ children }) {
  const [typeFont, setTypeFont] = useState("serif");
  return (
    <TypeFontContext.Provider value={{ typeFont, setTypeFont }}>
      {children}
    </TypeFontContext.Provider>
  );
}
