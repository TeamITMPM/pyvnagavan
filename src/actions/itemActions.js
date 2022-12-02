import axios from "axios";
// const URL = process.env.REACT_APP_API_URL + `api/item`;

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    URL = process.env.REACT_APP_API_URL + `api/item`;
    const { data } = await axios.get(URL);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
