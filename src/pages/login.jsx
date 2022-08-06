import React from "react";
import SignIn from "../Components/SignIn";
import getAccount from "../services/getAccount";
import getToken from "../services/getToken";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser, logged } from "../features/usersSlice";

const Login = () => {
  // const navigate = useNavigate();

  // const passwordInput = useRef();
  // const userInput = useRef();
  const dispatch = useDispatch();
  const userisLogged = useSelector((state) =>
    state.users.users.map((user) => {
      return user.isLogged;
    })
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const awaitToken = await getToken();
    if (awaitToken.status === 200) {
      dispatch({
        userisLogged,
        type: logged(true),
      });
      const token = awaitToken.body.token;
      const awaitAccount = await getAccount(token);
      const email = awaitAccount.body.email;
      console.log(email);
    }
  };
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
              <input
                // ref={userInput}
                type="text"
                id="userInput"
                // required={true}
              />
            </div>
            <div className="input-wrapper">
              <label id="password" htmlFor="passwordInput">
                Password
              </label>
              <input
                // ref={passwordInput}
                type="password"
                id="passwordInput"
                // required={true}
              />
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
