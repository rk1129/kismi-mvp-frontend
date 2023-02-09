import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../components/auth/authSlice";
import routeSlice from "../components/routing/routeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    route: routeSlice,
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
