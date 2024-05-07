import React, { Component } from "react";
import Lxt_productList from "./components/Lxt_productList";
import Lxt_productAdd from "./components/Lxt_productAdd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: "Lê Xuân Toàn", id: 2210900069, status: 1 },
        { title: "Cabbage", id: 1, status: 1 },
        { title: "Garlic", id: 2, status: 0 },
        { title: "Apple", id: 3, status: 0 },
        { title: "Samsung", id: 4, status: 1 },
      ],
    };
  }

  lxtHandleSubmit = (param) => {
    console.log("App:", param);
    //
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products,
    });
  };
  render() {
    return (
      <div className="container border mt-5">
        <h1>Lê Xuân Toàn - Rander data - Even form</h1>
        <hr />
        <Lxt_productList renderProducts={this.state.products} />
        <hr />
        <Lxt_productAdd onSubmit={this.lxtHandleSubmit} />
      </div>
    );
  }
}
