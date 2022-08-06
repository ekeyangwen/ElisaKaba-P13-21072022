import { createSlice } from "@reduxjs/toolkit";
// firstName: "",
// lastName: "",
// email: "",
// password: "",
// isFetching: false,
// isLogged: false,
// isError: false,
// errorMessage: "",
const initialState = {
  users: [
    {
      firstName: "Tony",
      lastName: "Stark",
      email: "tony@stark.com",
      password: "password123",
      isLogged: false,
    },
    {
      firstName: "Steve",
      lastName: "Rogers",
      email: "steve@rogers.com",
      password: "password456",
      isLogged: false,
    },
  ],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, { users: payload }];
      state.users.push(payload);

      // state.lastName = payload.lastName;
      // state.email = payload.email;
      // state.password = payload.password;
      // state.isFetching = false;
      // state.isLogged = payload.isLogged;
      // state.isError = false;
      // state.errorMessage = ""
    },

    logged: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
      state.isLogged = true;
    },
    editUser: (state, { payload }) => {
      state.firstName = payload.firstName;
    },
  },
});

export const { addUser, logged, editUser } = usersSlice.actions;
export default usersSlice.reducer;
