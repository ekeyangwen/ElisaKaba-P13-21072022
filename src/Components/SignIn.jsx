import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @returns component sign in
 */
const SignIn = () => {
  return (
    <div className="signToLogin">
      <NavLink className="main-nav-item" to="/login">
        <div className="signIn">
          <i className="fa fa-user-circle"></i>
          <p className="okToSign">Sign In</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SignIn;
