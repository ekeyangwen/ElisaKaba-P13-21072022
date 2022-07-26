import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";

const Header = () => {
  return (
    <section className="header">
      <div className="logoNavAndSignIn">
        <NavLink to="/">
          <img
            className="logo"
            src="../../../img/argentBankLogo.png"
            alt="logo argent bank"
          ></img>
          <h1 className="headerTitle">Argent Bank</h1>
        </NavLink>{" "}
        <SignIn />
      </div>
    </section>
  );
};

export default Header;
