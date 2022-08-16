import React from "react";
import { NavLink } from "react-router-dom";
import transaction from "../pages/transaction";

const TransactionBtn = () => {
  return (
    <NavLink to="/transaction" className="getTransaction">
      <button className="transaction-button">View transactions</button>
    </NavLink>
  );
};
export default TransactionBtn;
