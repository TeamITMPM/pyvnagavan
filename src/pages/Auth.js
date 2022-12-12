import React from "react";

const Auth = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="email" name="email" />
        <br />

        <input type="password" placeholder="password" name="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Auth;
