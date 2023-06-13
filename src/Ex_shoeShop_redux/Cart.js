import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_AMOUNT, DELETE_SHOE } from "./redux/constant/shoeConstant";

class Cart extends Component {
  render() {
    let { cart, handleRemove, handleChangeAmount } = this.props;
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleChangeAmount(item, -1);
                      }}
                      className="btn btn-success"
                    >
                      -
                    </button>
                    <strong className="mx-3">{item.soLuong}</strong>
                    <button
                      onClick={() => {
                        handleChangeAmount(item, +1);
                      }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <img style={{ width: 50 }} src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (idShoe) => {
      let action = {
        type: DELETE_SHOE,
        payload: idShoe,
      };
      dispatch(action);
    },
    handleChangeAmount: (shoe, option) => {
      let action = {
        type: CHANGE_AMOUNT,
        payload: {
          shoe,
          option,
        },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
