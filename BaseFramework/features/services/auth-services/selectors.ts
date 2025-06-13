import type { RootState } from "../../features/redux";

const authReducer = (state: RootState): RootState => state.authReducer;

export const selectAuthToken = (state: RootState): string =>
  authReducer(state).authToken;

export const selectUserGIBData = (state: RootState): any =>
  authReducer(state).userGIBProfileData;
