import axios from "axios";
import {
  NAV_LIST_REQUEST,
  NAV_LIST_SUCCESS,
  NAV_LIST_FAIL,
} from "../constants/navConstants";

export const typeList = () => async (dispatch) => {
  const URL = process.env.REACT_APP_API_URL + `api/type`;
  try {
    dispatch({ type: NAV_LIST_REQUEST });
    const { data } = await axios.get(URL);
    dispatch({
      type: NAV_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NAV_LIST_FAIL,
      payload: error,
    });
  }
};
