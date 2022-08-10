import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/usersSlice";

const SignOut = () => {
  const dispatch = useDispatch();

  const userLogout = ({ userisLogged }) => {
    userisLogged = true;
    if (userisLogged === true) {
      dispatch(logout());
    }
  };

  return (
    <div className="signToLogout">
      <NavLink className="main-nav-item" to="/login">
        <div className="signOut">
          <div className="out">
            <i className="fa fa-sign-out"></i>
            <p className="okToSign" onClick={userLogout}>
              Sign Out
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SignOut;
