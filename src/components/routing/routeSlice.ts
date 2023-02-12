import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthState {
  isBodyBlur: boolean;
  isNotificationOpened: boolean;
  isContactOpened: boolean;
}

const initialState: AuthState = {
  isBodyBlur: false,
  isNotificationOpened: false,
  isContactOpened: false,
};

export const routeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNotificationOpened: (state, action: PayloadAction<boolean>) => {
      state.isBodyBlur = action.payload;
      state.isNotificationOpened = action.payload;
    },
    setContactOpened: (state, action: PayloadAction<boolean>) => {
      state.isBodyBlur = action.payload;
      state.isContactOpened = action.payload;
    },
  },
});

export const { setNotificationOpened, setContactOpened } = routeSlice.actions;

export const selectIsBodyBlur = (state: RootState) => state.route.isBodyBlur;

export const selectIsNotificationOpened = (state: RootState) =>
  state.route.isNotificationOpened;

export const selectIsContactOpened = (state: RootState) =>
  state.route.isContactOpened;

export default routeSlice.reducer;
