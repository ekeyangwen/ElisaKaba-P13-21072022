import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/usersSlice";

const SignOut = () => {
  const dispatch = useDispatch();

  const falseLog = (userisLogged) => {
    userisLogged = false;
    if (userisLogged === false) {
      dispatch(logout());
    }
  };

  return (
    <div className="signToLogout">
      <NavLink className="main-nav-item" to="/login">
        <div className="signOut">
          <p className="okToSign" onClick={falseLog}>
            Sign Out
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default SignOut;
