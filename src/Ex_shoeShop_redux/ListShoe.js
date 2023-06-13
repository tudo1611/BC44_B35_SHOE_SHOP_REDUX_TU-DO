import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.listShoe.map((item, index) => {
      return <ItemShoe key={index} data={item} />;
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    listShoe: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps, null)(ListShoe);
