import React from "react";
import TransactionBtn from "../Components/TransactionBtn";

const UserAccount = ({ firstName, lastName, title, amount, description }) => {
  return (
    <div>
      <div class="account-content-wrapper">
        <h3 class="account-title">{title}</h3>
        <p class="account-amount">{amount}</p>
        <p class="account-amount-description">{description}</p>
        <TransactionBtn />
      </div>
    </div>
  );
};

export default UserAccount;
