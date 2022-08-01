import React from "react";
import TransactionBtn from "../Components/TransactionBtn";

const UserAccount = ({ title, amount, description }) => {
  return (
    <div>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
        <TransactionBtn />
      </div>
    </div>
  );
};

export default UserAccount;
