import React from "react";
import UserAccount from "../Components/UserAccount";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { editUser } from "../features/usersSlice";

const Account = () => {
  const dispatch = useDispatch();

  const edit = useSelector((state) => state.users.edit);

  console.log(edit);

  const editName = () => {
    dispatch(editUser());
  };

  // if (edit === true) {
  //   return (

  //   );
  // }

  return (
    <div>
      <section className="loginDarkBackground">
        <section className="userAccount">
          <div className="welcome">
            <h1 className="userName">
              Welcome back
              <br />!
            </h1>
            {edit === true ? (
              <div className="edit">
                <div className="inputChange">
                  <input
                    type="text"
                    className="first"
                    placeholder="Firstname"
                  ></input>
                  <input
                    type="text"
                    className="last"
                    placeholder={"Lastname"}
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
