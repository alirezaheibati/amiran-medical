import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
/**
 * Configures the Redux store with application slices.
 * Currently includes the cart slice for managing cart state.
 */
export const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
