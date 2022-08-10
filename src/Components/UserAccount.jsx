import React from "react";
import TransactionBtn from "../Components/TransactionBtn";

const UserAccount = () => {
  const BankAccount = [
    {
      id: 1,
      type: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      type: "Argent Bank Savings (x67124)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      type: "Argent Bank Credit Card (x5201)",
      amount: "$184.42",
      description: "Current Balance",
    },
  ];

  console.log();
  return (
    <div className="transaction">
      <div className="account-content-wrapper">
        <h3 className="account-title">{BankAccount[0].type}</h3>
        <p className="account-amount">{BankAccount[0].amount}</p>
        <p className="account-amount-description">
          {BankAccount[0].description}
        </p>
        <TransactionBtn />
      </div>
      <div className="account-content-wrapper">
        <h3 className="account-title">{BankAccount[1].type}</h3>
        <p className="account-amount">{BankAccount[1].amount}</p>
        <p className="account-amount-description">
          {BankAccount[1].description}
        </p>
        <TransactionBtn />
      </div>
      <div className="account-content-wrapper">
        <h3 className="account-title">{BankAccount[2].type}</h3>
        <p className="account-amount">{BankAccount[2].amount}</p>
        <p className="account-amount-description">
          {BankAccount[2].description}
        </p>
        <TransactionBtn />
      </div>
    </div>
  );
};

export default UserAccount;
