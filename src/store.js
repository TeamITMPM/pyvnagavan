import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adressReducer } from "./reducers/adressReducers";
import { basketListMyReducer } from "./reducers/basketReducers";
import { itemListReducer, itemPageState } from "./reducers/itemReducers";
import { navListReducer } from "./reducers/navReducers";
import { currentOrderReducer, orderReducer } from "./reducers/orderReducers";
import { userLoginReducer } from "./reducers/userReducers";

let rootReducer = combineReducers({
  itemState: itemListReducer,
  itemPageState: itemPageState,
  userInfo: userLoginReducer,
  navState: navListReducer,
  basketState: basketListMyReducer,
  currentOrderState: currentOrderReducer,
  orderState: orderReducer,
  adressState: adressReducer,
});

const initialState = {
  itemState: {},
  itemPageState: {},
  userInfo: {},
  navState: {},
  basketState: {},
  currentOrderState: {},
  orderState: {},
  adressState: {},
};

const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  // не удаляй комент ниже
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
