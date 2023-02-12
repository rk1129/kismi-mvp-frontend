import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../components/auth/authSlice";
import homeSlice from "../components/home/homeSlice";
import routeSlice from "../components/routing/routeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    route: routeSlice,
    home: homeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
