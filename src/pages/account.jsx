import React, { useState } from "react";
import UserAccount from "../Components/UserAccount";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { editUser, editName } from "../features/usersSlice";
import { stopEditUser } from "../features/usersSlice";
import PutProfile from "../services/putProfile";

const Account = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.users.edit);
  const accountFirstUser = useSelector((state) => state.users.firstName);
  const accountLastUser = useSelector((state) => state.users.lastName);
  const [saveInputFirst, setSaveInputFirst] = useState("");
  const [saveInputLast, setSaveInputLast] = useState("");
  const saveToken = useSelector((state) => state.users.tokenSave);
  const removeEdit = useSelector((state) => state.users.stopEdit);

  const editUserName = () => {
    dispatch(editUser());
  };

  const save = () => {
    console.log("saveFirst:", saveInputFirst);
    console.log("saveLast:", saveInputLast);
    console.log("token:", saveToken);
    PutProfile(saveToken, saveInputFirst, saveInputLast);
    dispatch(editName({ firstName: saveInputFirst, lastName: saveInputLast }));
  };

  const stopEdit = () => {
    dispatch(stopEditUser());
    console.log(removeEdit);
    setSaveInputFirst("");
    setSaveInputLast("");
  };

  return (
    <div>
      <section className="loginDarkBackground">
        <section className="userAccount">
          <div className="welcome">
            <h1 className="userID">
              Welcome back <br />
              {accountFirstUser} {accountLastUser}!
            </h1>
            {edit ? (
              <div className="edit">
                <div className="inputChange">
                  <input
                    type="text"
                    className="first"
                    placeholder={accountFirstUser}
                    onChange={(e) => {
                      setSaveInputFirst(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="last"
                    placeholder={accountLastUser}
                    onChange={(e) => {
                      setSaveInputLast(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="changeBtn">
                  <button className="save" onClick={save}>
                    Save
                  </button>
                  <button className="cancel" onClick={stopEdit}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button className="edit-button" onClick={editUserName}>
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
