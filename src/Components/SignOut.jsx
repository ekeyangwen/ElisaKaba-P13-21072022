import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/usersSlice";
import { useState } from "react";

const SignOut = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const falseLog = (userisLogged) => {
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
            <i class="fa fa-sign-out"></i>
            <p className="okToSign" onClick={falseLog}>
              Sign Out
            </p>
          </div>{" "}
        </div>
      </NavLink>
    </div>
  );
};

export default SignOut;
