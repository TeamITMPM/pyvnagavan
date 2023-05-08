import {
  USER_LOGIN_FAIL,
  USER_LOGIN_GUEST_FAIL,
  USER_LOGIN_GUEST_REQUEST,
  USER_LOGIN_GUEST_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, isAuth: true, token: action };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action };

    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, isAuth: true, token: action };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action };

    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, isAuth: true, token: action };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action };

    case USER_LOGIN_GUEST_REQUEST:
      return { loading: true };
    case USER_LOGIN_GUEST_SUCCESS:
      return { loading: false, isAuth: false, token: action };
    case USER_LOGIN_GUEST_FAIL:
      return { loading: false, error: action };

    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
