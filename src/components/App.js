import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";
// import { SHOP_ROUTE } from "../utils/consts";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import jwt_decode from "jwt-decode";

import { authRoutes, publicRoutes } from "../routes";
export default function App() {
  const isAuth = !!localStorage.userInfo;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      const data = jwt_decode(JSON.parse(localStorage.userInfo).token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    }
  }, []);
  return (
    <Router>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {/* <Redirect to={SHOP_ROUTE} /> */}
    </Router>
  );
}
