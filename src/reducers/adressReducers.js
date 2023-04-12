import {
  ADRESS_LIST_FAIL,
  ADRESS_LIST_REQUEST,
  ADRESS_LIST_SUCCESS,
} from "../constants/adressConstants";

export const adressReducer = (state = { types: [], category: {} }, action) => {
  switch (action.type) {
    case ADRESS_LIST_REQUEST:
      return { loading: true, types: [] };
    case ADRESS_LIST_SUCCESS:
      return {
        loading: false,
        types: action.payload,
      };

    case ADRESS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
