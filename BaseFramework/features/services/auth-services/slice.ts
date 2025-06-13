import { createSlice, createAction } from "@reduxjs/toolkit";

interface State {
  authToken: null | string;
  userGIBProfileData: null | Object;
}

const initialState: State = {
  authToken: null,
  userGIBProfileData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setGIBUserProfileData(state, action) {
      state.userGIBProfileData = action.payload;
    },
  },
});

//Reducer
export const authReducer = authSlice.reducer;

//Actions
export const { setAuthToken, setGIBUserProfileData } = authSlice.actions;

export const doGIBCustomerProfileInquiry = createAction(
  "AUTH/DO_CUSTOMER_PROFILE_INQUIRY"
);
