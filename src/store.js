import { combineReducers, createStore, applyMiddleware } from "redux";
import { itemListReducer } from "./reducers/itemReducers";
import { userLoginReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { navListReducer } from "./reducers/navReducers";

let rootReducer = combineReducers({
  itemState: itemListReducer,
  userInfo: userLoginReducer,
  navState: navListReducer,
});

const initialState = {
  itemState: {},
  // userInfo: {},
};

const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
