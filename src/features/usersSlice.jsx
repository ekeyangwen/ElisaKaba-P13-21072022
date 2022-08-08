import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  isLogged: false,
  edit: false,
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

    editUser: (state, action) => {
      state.edit = true;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.users.lastName;
    },
  },
});

export const { login, logout, editUser } = usersSlice.actions;
export default usersSlice.reducer;
