import React from "react";

import UserLogin from "../components/UserLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header /> 
      <UserLogin />
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
