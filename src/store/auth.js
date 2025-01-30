import { createSlice } from "@reduxjs/toolkit";

// "role": "company" | "freelancer" | "admin" | "superadmin",

// const initialState = {
//   user: {
//     _id: "user1",
//     role: "freelancer",
//     fullname: "Miruts Yifter", // Full Name
//     email: "miruts@gmail.com", // Must be unique
//   },
//   token: "akdwoufanosdiufal;kwnmdifuaqwnjefojqowevjq",
//   status: "succeeded", // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

const initialState = {
  user: {
    _id: undefined,
    role: undefined,
    fullname: undefined, // Full Name
    email: undefined, // Must be unique
  },
  token: undefined,
  status: "guest", // 'guest' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// const initialState = {
//   user: {
//     _id: "user1",
//     role: "company",
//     fullname: "Miruts Yifter", // Full Name
//     email: "miruts@gmail.cm", // Must be unique
//   },
//   token: "akdwoufanosdiufal;kwnmdifuaqwnjefojqowevjq",
//   status: "succeeded", // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
    },
    loginSuccess(state, action) {
      state.status = "succeeded";
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    signupStart(state) {
      state.status = "loading";
    },
    signupSuccess(state, action) {
      state.status = "succeeded";
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.error = null;
    },
    signupFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
