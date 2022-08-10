import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Steve",
  lastName: "Rogers",
  isLogged: false,
  edit: false,
  changeName: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    login: (state) => {
      state.isLogged = true;
    },

    logout: (state) => {
      state.isLogged = false;
    },

    editUser: (state) => {
      state.edit = true;
    },

    changeFirstName: (state, action) => {
      state.firstName = action.payload.users.firstName;
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload.users.lastName;
    },
  },
});

export const { login, logout, editUser, changeFirstName, changeLastName } =
  usersSlice.actions;
export default usersSlice.reducer;
