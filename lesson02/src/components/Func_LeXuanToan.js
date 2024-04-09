import React from "react";

export default function Func_LeXuanToan(props) {
  const users = {
    name: "Le Xuan Toan",
    age: 20,
  };
  return (
    <div>
      <h2>Func Component Demo </h2>
      <p>
        {" "}
        chao mung , {users.name}- {users.age}
      </p>
      <hr />
      <h3>
        Props:
        <br />FullName :{props.fullName}
        <br />age :{props.age}
      </h3>
    </div>
  );
}
