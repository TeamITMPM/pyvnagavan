import axios from "axios";
import {
  ADRESS_LIST_FAIL,
  ADRESS_LIST_REQUEST,
  ADRESS_LIST_SUCCESS,
} from "../constants/adressConstants";

export const getAdress = () => async (dispatch) => {
  const URL = process.env.REACT_APP_API_URL + `api/shop`;
  try {
    dispatch({ type: ADRESS_LIST_REQUEST });
    const { data } = await axios.get(URL);

    dispatch({
      type: ADRESS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADRESS_LIST_FAIL,
      payload: error,
    });
  }
};
