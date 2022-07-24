import React from "react";
import UserAccount from "../Components/UserAccount";

const Account = () => {
  const data = [
    {
      id: 0,
      firstName: "Tony",
      lastName: "Stark",
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 1,
      firstName: "Steve",
      lastName: "Rogers",
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
  ];
  return (
    <div>
      <section className="loginDarkBackground">
        <section className="userAccount">
          <div className="welcome">
            <h1 className="userName">
              Welcome back
              <br />
              {data[0].firstName} {data[0].lastName} !
            </h1>
            <button class="edit-button">Edit Name</button>
          </div>
          <UserAccount
            title={data[0].title}
            amount={data[0].amount}
            description={data[0].description}
          />
          <UserAccount
            title={data[1].title}
            amount={data[1].amount}
            description={data[1].description}
          />
        </section>
      </section>
    </div>
  );
};

export default Account;
