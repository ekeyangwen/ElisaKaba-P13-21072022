import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";

/**
 *
 * @returns header
 */
const Header = () => {
  const userisLogged = useSelector((state) => state.users.isLogged);
  const accountUser = useSelector((state) => state.users.firstName);

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
                <div className="okToReturn">{accountUser}</div>
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
