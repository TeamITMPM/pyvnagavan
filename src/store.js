import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { itemListReducer } from "./reducers/itemReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { navListReducer } from "./reducers/navReducers";
import { basketListMyReducer } from "./reducers/basketReducer";

let rootReducer = combineReducers({
  itemState: itemListReducer,
  userInfo: userLoginReducer,
  navState: navListReducer,
  basketState: basketListMyReducer,
});

const initialState = {
  itemState: {},
  userInfo: {},
  navState: {},
  basketState: {},
};

const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
