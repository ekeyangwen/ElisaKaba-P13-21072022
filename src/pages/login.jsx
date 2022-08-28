import React, { useState } from "react";
import getAccount from "../services/getAccount";
import getToken from "../services/getToken";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editName, login, tokenForPut } from "../features/usersSlice";
import { Navigate, NavLink } from "react-router-dom";
import Error from "../Components/Error";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(false);

  const userisLogged = useSelector((state) => state.users.isLogged);

  /**
   * all actions when the login btn is cliqued
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const awaitToken = await getToken(userName, password);
    if (awaitToken.status === 200) {
      const token = awaitToken.body.token;
      const awaitAccount = await getAccount(token);

      if (awaitAccount.status === 200) {
        const first = awaitAccount.body.firstName;
        const last = awaitAccount.body.lastName;
        dispatch(login());

        dispatch(editName({ firstName: first, lastName: last }));
      }
      dispatch(tokenForPut({ tokenSave: token }));
    }
    if (awaitToken.status === 400) {
      SetError(true);
    }
  };
  if (userisLogged) {
    return <Navigate to="/account" />;
  }
  return (
    <section className="loginDarkBackground">
      <section className="sign-in-content">
        <form className="loginForm" onSubmit={handleSubmit}>
          {error ? (
            <div>
              <Error />
            </div>
          ) : (
            <div className="noErrorInput">
              <div className="signToLogin">
                <NavLink className="main-nav-item" to="/login">
                  <div className="signIn">
                    <i className="fa fa-user-circle"></i>
                    <p className="okToSign">Sign In</p>
                  </div>
                </NavLink>
              </div>
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
                  <input type="checkbox" id="remember-me" />
                </div>
              </div>
              <button className="sign-in-button">Sign In</button>{" "}
            </div>
          )}
        </form>
      </section>
    </section>
  );
};
export default Login;
