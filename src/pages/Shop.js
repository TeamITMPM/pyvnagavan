import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { connect } from "react-redux";
import { listItems } from "../actions/itemActions";

import Header from "../components/Header";
import Nav from "../components/Nav";
import News from "../components/News";
import Items from "../components/Items";
import Pagination from "../components/ShopPagination"
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <>
      <Header />
      <Nav />
      <News />
      
      <Items />
      <Pagination />
      <Footer />
    </>
  );
};

export default Shop;
