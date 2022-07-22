import React from "react";
import SignIn from "../Components/SignIn";

const Login = () => {
  return (
    <div className="login">
      <section className="loginDarkBackground">
        <section className="sign-in-content">
          <form className="loginForm">
            <SignIn />
            <div className="input-wrapper">
              <label id="userName" for="userName">
                Username
              </label>
              <input type="text" id="userInput" />
            </div>
            <div className="input-wrapper">
              <label id="password" for="password">
                Password
              </label>
              <input type="password" id="userInput" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
