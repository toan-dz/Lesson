import React, { Component } from "react";

export default class LXT_EventForm1 extends Component {
  //Hàm sử lý sự kiện
  eventHandleClick1 = () => {
    alert("event handle 1");
  };
  eventHandleClick2 = () => {
    alert("Event Click 2");
  };

  render() {
    return (
      <div className="alert alert-danger">
        <h2>Event handle</h2>

        {/* <button onClick={this.eventHandleClick1}>Click 1</button> */}
        <button onClick={this.eventHandleClick2}>Click 2</button>
      </div>
    );
  }
}
