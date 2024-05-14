import React, { useContext, useState } from "react";
import Lxt_useContext1 from "./Lxt_useContext1";
export const ThemeContext = createContext();
export default function Lxt_useContext() {
  //
  const [theme, settheme] = useState("red");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h2>Demop usrContext</h2>
        <Lxt_useContext1 />
      </div>
    </ThemeContext.Provider>
  );
}
