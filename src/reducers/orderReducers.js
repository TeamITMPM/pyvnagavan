import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_ALL_REQUEST,
  ORDER_LIST_ALL_SUCCESS,
  ORDER_LIST_ALL_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

export const orderReducer = (state = { itemInBasket: [] }, action) => {
  //   switch (action.type) {
  //     case BASKET_LIST_MY_REQUEST:
  //       return {
  //         loading: true,
  //       };
  //     case BASKET_LIST_MY_SUCCESS:
  //       return {
  //         loading: false,
  //         itemInBasket: action.payload,
  //       };
  //     case BASKET_LIST_MY_FAIL:
  //       return {
  //         loading: false,
  //         error: action.paylod,
  //       };
  //     case BASKET_DELETE_REQUEST:
  //       return {
  //         loading: true,
  //       };
  //     case BASKET_DELETE_SUCCESS:
  //       console.log("action_payload_DELETE_SUCCES", action.payload);
  //       return {
  //         loading: false,
  //         itemInBasket: action.payload,
  //       };
  //     case BASKET_DELETE_FAIL:
  //       return {
  //         loading: false,
  //         error: action.paylod,
  //       };
  //     // case BASKET_LIST_MY_RESET:
  //     //   return { itemInBasket: [] };
  // default:
  //   return state;
  //   }
};
