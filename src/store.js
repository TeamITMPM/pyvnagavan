import { combineReducers, createStore, applyMiddleware } from "redux";
import { itemListReducer } from "./reducers/itemReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let rootReducer = combineReducers({
  itemState: itemListReducer,
});

const initialState = {
  itemState: {},
};

const middleware = [thunk];

let store = createStore(
  rootReducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
