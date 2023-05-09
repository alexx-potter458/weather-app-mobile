import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type UserProps = {
  email: string;
  isLogged: boolean;
};

const initialState: UserProps = {
  email: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLogged = true;
      state.email = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state.userReducer.isLogged;

export const selectEmail = (state: RootState) => state.userReducer.email;

export default userSlice.reducer;
