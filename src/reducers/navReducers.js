import {
  NAV_LIST_REQUEST,
  NAV_LIST_SUCCESS,
  NAV_LIST_FAIL,
  NAV_CATEGORY_REQUEST,
  NAV_CATEGORY_SUCCESS,
  NAV_CATEGORY_FAIL,
} from "../constants/navConstants";

export const navListReducer = (state = { types: [], category: {} }, action) => {
  console.log("reducer ", action.payload);

  switch (action.type) {
    case NAV_LIST_REQUEST:
      return { loading: true, types: [] };
    case NAV_LIST_SUCCESS:
      return {
        loading: false,
        types: action.payload,
      };
    case NAV_CATEGORY_SUCCESS:
      return {
        ...state,

        category: action.payload,
      };
    case NAV_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const setCategoryReducer = (state = {}, action) => {
//   // console.log("reducer ", action.payload);
//   switch (action.type) {
//     case NAV_CATEGORY_SUCCESS:
//       return {
//         ...state,
//         navState: {
//           ...state.navState,
//           category: action.payload,
//         },
//       };
//     case NAV_CATEGORY_FAIL:
//       return { error: action.payload };
//     default:
//       return state;
//   }
// };
