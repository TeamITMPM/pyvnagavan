import jwt_decode from "jwt-decode";
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
import axios from "axios";

export const addToOrder = (itemId, setBeer) => async (dispatch) => {
  // console.log("itemId", itemId);
  // console.log("setBeer", setBeer);
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const order = {
      itemId: itemId,
      quantity: setBeer[itemId],
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { basketId } = jwt_decode(token);

    URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;
    const { data } = await axios.post(URL, JSON.stringify(order), config);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error,
    });
  }
};

// export const listMyOrder = () => async (dispatch, getState) => {
//   const { token } = JSON.parse(localStorage.getItem("userInfo"));
//   const { basketId } = jwt_decode(token);

//   URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;

//   try {
//     dispatch({ type: BASKET_LIST_MY_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const { data } = await axios.get(URL, config);
//     dispatch({
//       type: BASKET_LIST_MY_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: BASKET_LIST_MY_FAIL,
//       payload: error,
//     });
//   }
// };
