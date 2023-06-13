import { shoeArr } from "../../data";
import {
  BUY_SHOE,
  CHANGE_AMOUNT,
  DELETE_SHOE,
  VIEW_DETAIL,
} from "../constant/shoeConstant";

let initialState = {
  shoeArr: shoeArr,
  detailShoe: shoeArr[0],
  cart: [],
};
export const shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      state.detailShoe = payload;
      return { ...state };
    }
    case DELETE_SHOE: {
      //payload: chứa ID shoe
      let cloneCart = state.cart.filter((item) => {
        return item.id !== payload;
      });
      //state.cart = cloneCart
      return { ...state, cart: cloneCart };
    }
    case BUY_SHOE: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == payload.id);
      if (index == -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
      }
      return { ...state, cart: cloneCart };
    }
    case CHANGE_AMOUNT: {
      //payload: object chứa shoe và option
      let { shoe, option } = payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == shoe.id);
      cloneCart[index].soLuong = cloneCart[index].soLuong + option;
      if (cloneCart[index].soLuong == 0) {
        //sau khi update soLuong, nếu = 0 thì xóa
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
