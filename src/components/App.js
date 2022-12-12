import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import Header from "./Header";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
// import Nav from "./Nav";
// import News from "./News";
// import Items from "./Items";
import Footer from "./Footer";
// import itemsDB from "../db/item/item.json";
import fetchItemsFromDB from "../services/services";

export default function App() {
  const isAuth = true;
  return (
    <Router>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          <Route key={path} path={path} component={Component} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {/* <Redirect to={SHOP_ROUTE} /> */}
    </Router>
  );
}
