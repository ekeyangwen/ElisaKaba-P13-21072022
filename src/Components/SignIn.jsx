import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signToLogin">
      <NavLink className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        <p className="okToSign">Sign In</p>
      </NavLink>
    </div>
  );
};

export default SignIn;
