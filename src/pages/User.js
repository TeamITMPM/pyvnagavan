import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";
// import { connect } from "react-redux";

export default function User() {
  return (
    <>
      <Header />

      <UserInfo />
      <OrderHistory />

      <div style={{bottom: "0", width: "100%", height:"35vh"}} />

      <Footer />
    </>
  );
}
