import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { connect } from "react-redux";
import { listItems } from "../actions/itemActions";
import Nav from "../components/Nav";
import News from "../components/News";
import Items from "../components/Items";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <>
      <Header />
      <Nav />
      <News />
      <Items />
      <Footer />
    </>
  );
};

export default Shop;
