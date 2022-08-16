import React from "react";
import Dropdown from "../Components/Dropdown";

const Transaction = () => {
  const data = [
    {
      date: "June 20th, 2020",
      description: "Golden Sun Bakery",
      transactions: [
        {
          id: 0,
          amount: "$5.00",
          balance: "$2082.79",
        },

        { id: 1, amount: "$10.00", balance: "$2087.79" },
        { id: 2, amount: "$20.00", balance: "$2097.79" },
        { id: 3, amount: "$30.00", balance: "$2117.79" },
        { id: 4, amount: "$40.00", balance: "$2147.79" },
        { id: 5, amount: "$50.00", balance: "$2187.79" },
      ],

      content: [
        {
          transactionType: "Electonic",
          category: "Food",
          notes: "Note:",
        },
      ],
    },
  ];

  const BankAccount = [
    {
      id: 1,
      type: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
  ];
  return (
    <div className="transactionInfos">
      <h2 className="bankChecking">
        <div className="account-content-wrapper">
          <p className="account-title">{BankAccount[0].type}</p>
          <h3 className="account-amount">{BankAccount[0].amount}</h3>
          <p className="account-amount-description">
            {BankAccount[0].description}
          </p>
        </div>
      </h2>
      <section className="dropdown">
        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[0].amount}
          balance={data[0].transactions[0].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />

        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[1].amount}
          balance={data[0].transactions[1].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />
        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[2].amount}
          balance={data[0].transactions[2].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />
        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[3].amount}
          balance={data[0].transactions[3].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />
        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[4].amount}
          balance={data[0].transactions[4].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />
        <Dropdown
          date={data[0].date}
          description={data[0].description}
          amount={data[0].transactions[5].amount}
          balance={data[0].transactions[5].balance}
          typeTransaction={data[0].content[0].transactionType}
          categoryTransaction={data[0].content[0].category}
          noteTransaction={data[0].content[0].notes}
        />
      </section>
    </div>
  );
};

export default Transaction;
