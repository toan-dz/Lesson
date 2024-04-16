import React, { Component } from "react";
import LXT_EventForml from "./components/LXT_EventForm1";
import LXT_EventForm1 from "./components/LXT_EventForm1";
import LXT_EventForml2 from "./components/LXT_EventForm2";
import LXT_EventForm2 from "./components/LXT_EventForm2";
import LXT_EventForm3 from "./components/LXT_EventForm3";
import LXT_EventForm4 from "./components/LXT_EventForm4";

export default class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>Event From Demo</h1>
        <LXT_EventForm1 />
        <LXT_EventForm2 />
        <LXT_EventForm3 />
        <LXT_EventForm4 name="Lê Xuân Toàn " />
      </div>
    );
  }
}
