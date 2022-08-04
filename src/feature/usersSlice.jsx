import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    setUsersData: (state, { payload }) => {
      state.users = payload;
    },
    editUser: (state, { payload }) => {
      state.users = state.users.map((us) => {
        if (us.email === payload[1]) {
          return {
            ...us,
            firstName: payload[0],
          };
        } else {
          return us;
        }
      });
    },
  },
});

export const { setUsersData, editUser } = usersSlice.actions;
export default usersSlice.reducer;
