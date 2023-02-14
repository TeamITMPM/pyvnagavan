import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import UserPage from "../components/UserPage";
// import { connect } from "react-redux";

export default function User() {
  return (
    <>
      <Header />
        <UserPage />
      
      <div style={{ bottom: "0", width: "100%", height: "35vh" }} />

      <Footer />
    </>
  );
}
