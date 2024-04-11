import { createSlice } from "@reduxjs/toolkit";
import { userActions as UserActions } from "../actions/user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: { userData: null },
  reducers: UserActions,
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
