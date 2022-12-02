import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Shop from "../pages/Shop";
import Nav from "./Nav";
import News from "./News";
import Items from "./Items";
import Footer from "./Footer";
// import itemsDB from "../db/item/item.json";
import fetchItemsFromDB from "../services/services";

export default function App() {
  return (
    <Router>
      <Header />

      <Route path="/" component={Shop} exact />

      <Footer />
    </Router>
  );
}
