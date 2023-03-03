import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import UserAgreement from "../components/UserAgreement";
import Footer from "../components/Footer";

// import { connect } from "react-redux";

const UserAgreementPage = () =>  {
  return (
    <>
      <Header />
      <UserAgreement />
      <div style={{ bottom: "0", width: "100%", height: "35vh" }} />

      <Footer />
    </>
  );
}
export default UserAgreementPage;