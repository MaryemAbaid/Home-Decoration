import { createSlice } from "@reduxjs/toolkit";

const userSystem = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSystem.actions;
export default userSystem.reducer;
