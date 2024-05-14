import React, { useState } from "react";

export default function Lxt_useState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  //mang
  const [list, setList] = useState([1]);
  //
  const lxtHandleList = () => {
    let num = parseInt(Math.random() * 100);
    //
    setList([...list, num]);
    //
    // list.push(num);
    // setList(list);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Lxt_useState />
      <hr />
      <h3>List :{list.toString()} </h3>
      <button onClick={lxtHandleList}>Thêm ngẫu nhiên</button>
    </div>
  );
}
