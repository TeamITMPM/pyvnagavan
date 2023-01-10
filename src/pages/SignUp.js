import React from "react";

import UserRegistration from "../components/UserRegistration";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <>
      <Header />
      <UserRegistration />
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        {/* Что бы закрепить оба футера внизу */}
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
