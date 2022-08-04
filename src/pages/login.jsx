import React from "react";
import SignIn from "../Components/SignIn";
import getAccount from "../services/getAccount";
import GetSignUp from "../services/getSignUp";
import getToken from "../services/getToken";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const awaitToken = await getToken();
    const awaitSignUp = await GetSignUp();
    if (awaitToken.status === 200) {
      const token = awaitToken.body.token;
      console.log(token);
      console.log(awaitSignUp);
      getAccount(token);

      return token;
    }
  };

  // const submitToken = () => {
  //   console.log("Token reçu");
  //   const awaitAccount = getAccount();
  //   console.log(awaitAccount);
  // };

  return (
    <div className="login">
      <section className="loginDarkBackground">
        <section className="sign-in-content">
          <form className="loginForm" onSubmit={handleSubmit}>
            <SignIn />
            <div className="input-wrapper">
              <label id="userName" htmlFor="userInput">
                Username
              </label>
              <input type="text" id="userInput" />
            </div>
            <div className="input-wrapper">
              <label id="password" htmlFor="passwordInput">
                Password
              </label>
              <input type="password" id="passwordInput" />
            </div>
            <div className="input-remember">
              <label id="remenberCheckBox" htmlFor="remember-me">
                Remember me
              </label>
              <input type="checkbox" id="remember-me" />
            </div>

            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
