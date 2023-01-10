import React from "react";

import UserLogin from "../components/UserLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <UserLogin />

      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        {/* Что бы закрепить оба футера внизу */}
        <Footer />
      </div>
    </>
  );
};

export default Login;
