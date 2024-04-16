import React, { Component } from "react";

export default class LXT_EventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Toan",
    };
  }
  handleGetName = () => {
    alert(this.props.name);
    this.setState({
      name: this.props.name,
    });
  };
  render() {
    return (
      <div className="alert alert-info">
        <h2>Lấy giữu liệu từ props</h2>
        <button onClick={this.handleGetName}>Lấy Tên</button>
        <h2>Wellcome to , {this.state.name}</h2>
      </div>
    );
  }
}
