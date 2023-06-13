import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import Cart from "./Cart";
import DetailShoe from "./DetailShoe";

export default class Ex_shoeShop_redux extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };
  render() {
    return (
      <div className="row">
        <Cart />
        <ListShoe />
        <DetailShoe />
      </div>
    );
  }
}
