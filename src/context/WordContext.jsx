//! Check your error
// import React, { createContext, useState } from "react";

// export const WordContext = createContext();

// export function WordProvider({ children }) {
//   const [word, setWord] = useState([]);
//   return (
//     <WordContext.Provider value={{ word, setWord }}>
//       {children}
//     </WordContext.Provider>
//   );
// }

import React, { createContext, useState } from "react";

export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [word, setWord] = useState([]);
  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
