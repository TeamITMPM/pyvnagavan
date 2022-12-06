import { createStore } from "redux";
import { combineReducers } from "redux";
import { itemListReducer } from "./reducers/itemReducers";

let rootReducerc = combineReducers({
  item: itemListReducer,
});

let store = createStore(
  rootReducerc,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
