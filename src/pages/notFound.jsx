import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="error">Sorry, page not found!</div>
      <NavLink to="/" className="getHome">
        <button className="backToHome">Retourner à l'accueil</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
