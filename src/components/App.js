import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "react-phone-number-input/style.css";
import AgeConfirmModal from "./AgeConfirmModal/AgeConfirmModal";

// import { SHOP_ROUTE } from "../utils/consts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "../pages/NotFoundPage";

import { loginGuest } from "../actions/userAction";
import { USER_LOGIN_SUCCESS } from "../constants/userConstants";
import { authRoutes, publicRoutes } from "../routes";

export default function App() {
  const token = localStorage.userInfo;
  // let isAuth = !!token;
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const { isAuth } = userInfo;

  useEffect(() => {
    if (token) {
      const data = jwt_decode(token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    }
  }, []);

  useEffect(() => {
    console.log("Сделать временную корзину");
    dispatch(loginGuest());
  }, []);

  return (
    <>
      <AgeConfirmModal />

      <Router>
        <Switch>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
          {/* <Redirect to={SHOP_ROUTE} /> */}
          {isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}
