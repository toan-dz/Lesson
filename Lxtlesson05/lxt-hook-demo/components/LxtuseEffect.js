import React, { useEffect, useState } from "react";

export default function LxtuseEffect() {
  //state
  const [conut, setCount] = useState(0);
  //
  const lxtHandelClick = () => {
    setCount((prev) => prev + 1);
  };
  //
  useEffect(() => {
    document.title += `Lê Xuân Toàn :You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });
  //
  useEffect(() => {
    console.log("Chạy lần đầu tiên - một lần");
  }, []);
  //
  useEffect(() => {
    console.log("useEffect conut click:", count);
  }, [count]);
  return (
    <div>
      <h2>Demo - useEffect:You clicked {count} times</h2>
      <button>Click here</button>
      <button onClick={lxtHandelClick}>Click me</button>
    </div>
  );
}
