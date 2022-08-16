import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  isLogged: false,
  edit: false,
  tokenSave: "",
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

    stopEditUser: (state) => {
      state.edit = false;
    },

    editName: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    tokenForPut: (state, action) => {
      state.tokenSave = action.payload.tokenSave;
      console.log(action.payload.tokenSave);
    },
  },
});

export const { login, logout, editUser, editName, stopEditUser, tokenForPut } =
  usersSlice.actions;
export default usersSlice.reducer;
