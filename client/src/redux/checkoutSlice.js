import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      isFetching: false,
      isSuccess: false,
      isError: false,
    },
    email: {
      isFetching: false,
      isSuccess: false,
      isError: false,
    },
  },
  reducers: {
    checkOutStart: (state) => {
      state.cart.isFetching = true;
    },
    checkOutSuccess: (state) => {
      state.cart.isFetching = false;
      state.cart.isSuccess = true;
    },
    checkOutFailed: (state) => {
      state.cart.isFetching = false;
      state.cart.isError = true;
    },
    sendMailStart: (state) => {
      state.cart.isFetching = true;
    },
    sendMailSuccess: (state) => {
      state.cart.isFetching = false;
      state.cart.isSuccess = true;
    },
    sendMailFailed: (state) => {
      state.cart.isFetching = false;
      state.cart.isError = true;
    },
  },
});

export const {
  checkOutStart,
  checkOutSuccess,
  checkOutFailed,
  sendMailStart,
  sendMailSuccess,
  sendMailFailed,
} = cartSlice.actions;
export default cartSlice.reducer;
