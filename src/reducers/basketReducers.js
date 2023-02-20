import {
  BASKET_CREATE_REQUEST,
  BASKET_CREATE_SUCCESS,
  BASKET_CREATE_FAIL,
  BASKET_DELETE_REQUEST,
  BASKET_DELETE_SUCCESS,
  BASKET_DELETE_FAIL,
  BASKET_DETAILS_REQUEST,
  BASKET_DETAILS_SUCCESS,
  BASKET_DETAILS_FAIL,
  BASKET_PAY_REQUEST,
  BASKET_PAY_SUCCESS,
  BASKET_PAY_FAIL,
  BASKET_LIST_MY_REQUEST,
  BASKET_LIST_MY_FAIL,
  BASKET_LIST_MY_SUCCESS,
  BASKET_LIST_MY_RESET,
  BASKET_LIST_ALL_REQUEST,
  BASKET_LIST_ALL_SUCCESS,
  BASKET_LIST_ALL_FAIL,
  BASKET_DELIVER_REQUEST,
  BASKET_DELIVER_SUCCESS,
  BASKET_DELIVER_FAIL,
} from "../constants/basketConstants";

export const basketListMyReducer = (state = { itemInBasket: [] }, action) => {
  switch (action.type) {
    case BASKET_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case BASKET_LIST_MY_SUCCESS:
      return {
        loading: false,
        itemInBasket: action.payload,
      };

    case BASKET_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };

    case BASKET_DELETE_REQUEST:
      return {
        loading: true,
      };

    case BASKET_DELETE_SUCCESS:
      console.log("action_payload_DELETE_SUCCES", action.payload);
      return {
        loading: false,
        itemInBasket: action.payload,
      };

    case BASKET_DELETE_FAIL:
      return {
        loading: false,
        error: action.paylod,
      };

    // case BASKET_LIST_MY_RESET:
    //   return { itemInBasket: [] };
    default:
      return state;
  }
};

// export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {}}, action) => {
//   switch (action.type) {
//     case ORDER_DETAILS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ORDER_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         order: action.payload,
//       };
//     case ORDER_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.paylod,
//       };
//     default:
//       return state;
//   }
// }

// export const orderPayReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ORDER_PAY_REQUEST:
//       return {
//         loading: true,
//       };
//     case ORDER_PAY_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };
//     case ORDER_PAY_FAIL:
//       return {
//         loading: false,
//         error: action.paylod,
//       };
//     case ORDER_PAY_RESET:
//       return {};
//     default:
//       return state;
//   }
// };

// export const orderListMyReducer = (state = {orders: []}, action) => {
//   switch (action.type) {
//     case ORDER_LIST_MY_REQUEST:
//       return {
//         loading: true,
//       };
//     case ORDER_LIST_MY_SUCCESS:
//       return {
//         loading: false,
//         orders: action.payload,
//       };
//     case ORDER_LIST_MY_FAIL:
//       return {
//         loading: false,
//         error: action.paylod,
//       };
//     case ORDER_LIST_MY_RESET:
//       return { orders: [] };
//     default:
//       return state;
//   }
// };

// export const orderListAllReducer = (state = { orders: [] }, action) => {
//   switch (action.type) {
//     case ORDER_LIST_ALL_REQUEST:
//       return {
//         loading: true,
//       };
//     case ORDER_LIST_ALL_SUCCESS:
//       return {
//         loading: false,
//         orders: action.payload,
//       };
//     case ORDER_LIST_ALL_FAIL:
//       return {
//         loading: false,
//         error: action.paylod,
//       };
//     default:
//       return state;
//   }
// };

// export const orderDeliverReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ORDER_DELIVER_REQUEST:
//       return {
//         loading: true,
//       };
//     case ORDER_DELIVER_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };
//     case ORDER_DELIVER_FAIL:
//       return {
//         loading: false,
//         error: action.paylod,
//       };
//     case ORDER_DELIVER_RESET:
//       return {};
//     default:
//       return state;
//   }
// };
