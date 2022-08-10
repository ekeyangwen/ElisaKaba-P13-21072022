import React from "react";
import UserAccount from "../Components/UserAccount";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { editUser } from "../features/usersSlice";
import { useState } from "react";
import { changeFirstName } from "../features/usersSlice";
import { changeLastName } from "../features/usersSlice";

const Account = () => {
  const dispatch = useDispatch();

  const [stopEdit, setStopEdit] = useState(false);
  const edit = useSelector((state) => state.users.edit);
  const firstName = useSelector((state) => state.users.firstName);
  const lastName = useSelector((state) => state.users.lastName);

  console.log("first", firstName);
  console.log("last", lastName);

  const editName = () => {
    dispatch(editUser());
  };

  const firstChange = () => {
    dispatch(changeFirstName());
  };
  const lastChange = () => {
    dispatch(changeLastName());
  };

  // if (stopEdit) {
  //   return edit === false;
  // }
  console.log(edit);

  return (
    <div>
      <section className="loginDarkBackground">
        <section className="userAccount">
          <div className="welcome">
            <h1 className="userName">
              Welcome back {firstName} {lastName}!
              <br />
            </h1>
            {edit ? (
              <div className="edit">
                <div className="inputChange">
                  <input
                    type="text"
                    className="first"
                    placeholder="Firstname"
                    onChange={(e) => {
                      firstChange();
                    }}
                  ></input>
                  <input
                    type="text"
                    className="last"
                    placeholder="Lastname"
                    onChange={(e) => {
                      lastChange();
                    }}
                  ></input>
                </div>
                <div className="changeBtn">
                  <button className="save">Save</button>
                  <button className="cancel">Cancel</button>
                </div>
              </div>
            ) : (
              <button className="edit-button" onClick={editName}>
                Edit Name
              </button>
            )}
          </div>

          <UserAccount />
        </section>
      </section>
    </div>
  );
};

export default Account;
