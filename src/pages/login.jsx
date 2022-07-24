import React from "react";
import SignIn from "../Components/SignIn";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <section className="loginDarkBackground">
        <section className="sign-in-content">
          <form className="loginForm">
            <SignIn />
            <div className="input-wrapper">
              <label id="userName" for="userInput">
                Username
              </label>
              <input type="text" id="userInput" />
            </div>
            <div className="input-wrapper">
              <label id="password" for="passwordInput">
                Password
              </label>
              <input type="password" id="passwordInput" />
            </div>
            <div className="input-remember">
              <label id="remenberCheckBox" for="remember-me">
                Remember me
              </label>
              <input type="checkbox" id="remember-me" />
            </div>
            <NavLink to="/Account" className="goToUserAccount">
              <button className="sign-in-button">Sign In</button>
            </NavLink>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
