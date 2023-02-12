import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface HomeNotificatoinState {
  congratModalVisible: boolean;
}

export interface HomeState {
  setBlur: boolean;
  notificatoin: HomeNotificatoinState;
}

const initialState: HomeState = {
  setBlur: false,
  notificatoin: {
    congratModalVisible: false,
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCongratNotificationVisible: (state) => {
      state.setBlur = false;
      state.notificatoin.congratModalVisible = false;
    },
  },
});

export const { setCongratNotificationVisible } = homeSlice.actions;

export const selectIsBlur = (state: RootState) => state.home.setBlur;

export const selectCongratNotification = (state: RootState) =>
  state.home.notificatoin.congratModalVisible;

export default homeSlice.reducer;
