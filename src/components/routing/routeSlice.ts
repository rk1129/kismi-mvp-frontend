import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AuthState {
  isNotificationOpened: boolean;
}

const initialState: AuthState = {
  isNotificationOpened: false,
};

export const routeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsnotificationOpened: (state, action: PayloadAction<boolean>) => {
      state.isNotificationOpened = action.payload;
    },
  },
});

export const { setIsnotificationOpened } = routeSlice.actions;

export const selectIsNotificationOpened = (state: RootState) =>
  state.route.isNotificationOpened;

export default routeSlice.reducer;
