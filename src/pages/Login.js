import React from "react";

import UserLogin from "../components/UserLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <UserLogin />

        {/* Что бы закрепить оба футера внизу */}
      <div style={{bottom: "0", width: "100%", height:"35vw"}} />
      
        <Footer />
      
    </>
  );
};

export default Login;
