import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  BASKET_CREATE_FAIL,
  BASKET_CREATE_REQUEST,
  BASKET_CREATE_SUCCESS,
  BASKET_DELETE_FAIL,
  BASKET_DELETE_SUCCESS,
  BASKET_LIST_MY_FAIL,
  BASKET_LIST_MY_REQUEST,
  BASKET_LIST_MY_SUCCESS,
} from "../constants/basketConstants";

export const addToBasket = (itemId, setBeer) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: BASKET_CREATE_REQUEST });

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
      type: BASKET_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_CREATE_FAIL,
      payload: error,
    });
  }
};

export const listMyBasket = () => async (dispatch, getState) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  const { basketId } = jwt_decode(token);

  URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;

  try {
    dispatch({ type: BASKET_LIST_MY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(URL, config);
    dispatch({
      type: BASKET_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_LIST_MY_FAIL,
      payload: error,
    });
  }
};

export const deleteFromBasket = (id) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  const { basketId } = jwt_decode(token);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { id: id },
    };

    URL = process.env.REACT_APP_API_URL + `api/basket/item/${basketId}`;
    const { data } = await axios.delete(URL, config);

    dispatch({
      type: BASKET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BASKET_DELETE_FAIL,
      payload: error,
    });
  }
};

export const cleareBasketState = () => async (dispatch) => {
  try {
    dispatch({
      type: BASKET_DELETE_SUCCESS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: BASKET_DELETE_FAIL,
      payload: error,
    });
  }
};
