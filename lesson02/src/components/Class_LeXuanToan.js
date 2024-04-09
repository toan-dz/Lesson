import React, { Component } from "react";

export default class Class_LeXuanToan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Le Xuan Toan",
      age: "20",
    };
  }
  users = {
    name: "Le Xuan Toan",
    age: 20,
  };
  //
  handleChange = (even) => {
    this.setState({
      fullName: "LXT",
    });
  };
  render() {
    return (
      <div>
        <h2>class Component Demo</h2>
        {this.users.name} - {this.users.age}
        <hr />
        <h3>info:{this.props.info}</h3>
        <h3>time:{this.props.time}</h3>
        <hr />
        <h3>
          State: FullName:{this.state.fullName} - class:{this.state.class}
        </h3>
        <button onClick={this.handleChange}>change Name</button>
      </div>
    );
  }
}
