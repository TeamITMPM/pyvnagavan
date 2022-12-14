import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

// import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="background">
     
      <App />
    </div>
  </Provider>
);
