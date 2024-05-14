import React, { useContext } from "react";
import { ThemeContext } from "./Lxt_useContext";

export default function Lxt_useContext2() {
  const theme = useContext(ThemeContext);
  return (
    <div className="theme">
      <h2>Lxt_useContext2</h2>
      <p>
        <b>Le Xuan Toan</b>
        <b>2210900069</b>
      </p>
    </div>
  );
}
