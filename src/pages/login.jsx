import React, { useState } from "react";
import SignIn from "../Components/SignIn";
import getAccount from "../services/getAccount";
import getToken from "../services/getToken";
import saveForm from "../localStorage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../features/usersSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("undefined");
  const [password, setPassword] = useState("undefined");
  const [checked, setChecked] = useState();

  const userisLogged = useSelector((state) => state.users.isLogged);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const awaitToken = await getToken(userName, password);

    if (awaitToken.status === 200) {
      const token = awaitToken.body.token;
      const awaitAccount = await getAccount(token);

      if (awaitAccount.status === 200) {
        dispatch(login());
      }
    }
    saveForm(userName, userisLogged, checked);
  };
  if (userisLogged) {
    return <Navigate to="/account" />;
  }
  // const remember = () => {
  //   if (checked) {
  //     console.log("check");
  //   }

  return (
    <section className="loginDarkBackground">
      <section className="sign-in-content">
        <form className="loginForm" onSubmit={handleSubmit}>
          <SignIn />
          <div className="input-wrapper">
            <label id="userName" htmlFor="userInput" placeholder="Username">
              Username
            </label>
            <input
              type="text"
              id="userInput"
              required={true}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label id="password" htmlFor="passwordInput">
              Password
            </label>
            <input
              type="password"
              id="passwordInput"
              required={true}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-remember">
            <label id="remenberCheckBox" htmlFor="remember-me">
              Remember me
            </label>
            <input
              type="checkbox"
              id="remember-me"
              onChange={() => {
                setChecked(true);
              }}
            />
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </section>
  );
};
export default Login;
