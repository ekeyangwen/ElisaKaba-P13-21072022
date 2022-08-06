import React from "react";
import UserAccount from "../Components/UserAccount";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { editUser } from "../features/usersSlice";

const Account = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const editButton = () => {
    dispatch(editUser);
  };

  return (
    <div>
      <section className="loginDarkBackground">
        <section className="userAccount">
          <div className="welcome">
            <h1 className="userName">
              Welcome back
              <br />
              {users[0].firstName} {users[0].lastName} !
            </h1>
            <button className="edit-button" onClick={editButton}>
              Edit Name
            </button>
          </div>
          <UserAccount
            title={users[0].title}
            amount={users[0].amount}
            description={users[0].description}
          />
        </section>
      </section>
    </div>
  );
};

export default Account;
