import React from "react";

export default function LXT_EventForm2() {
  const eventHandleClick1 = (content) => {
   console.log('====================================');
   console.log(content);
   console.log('===================================='); 
  };

  return (
    <div className="alert alert-success">
      <h2>Event Demo - Function Component</h2>
      <button onClick={eventHandleClick1("Lê Xuân Toàn")}>
        Gọi Khi Render
      </button>
      <button onClick={() => eventHandleClick1("K22CNT2")}>
        Gọi Khi Click
      </button>
    </div>
  );
}
