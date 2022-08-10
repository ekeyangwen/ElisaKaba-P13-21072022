import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";

const Header = (userFirstname) => {
  const userisLogged = useSelector((state) => state.users.isLogged);
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
        {userisLogged ? (
          <div className="returnToAccount">
            <NavLink className="main-nav-item" to="/account">
              <div className="account">
                <i className="fa fa-user-circle"></i>
                <div className="okToReturn">user</div>
              </div>
            </NavLink>
            <SignOut />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </section>
  );
};

export default Header;
