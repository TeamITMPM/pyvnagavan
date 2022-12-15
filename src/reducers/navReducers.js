import { combineReducers } from "redux";
import {
  NAV_LIST_REQUEST,
  NAV_LIST_SUCCESS,
  NAV_LIST_FAIL,
} from "../constants/navConstants";

export const navListReducer = (state = { types: [] }, action) => {
  switch (action.type) {
    case NAV_LIST_REQUEST:
      return { loading: true, types: [] };
    case NAV_LIST_SUCCESS:
      return {
        loading: false,
        types: action.payload,
      };
    case NAV_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
