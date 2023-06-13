import { VIEW_DETAIL } from "../constant/shoeConstant";

export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};
