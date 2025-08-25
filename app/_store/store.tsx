import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import itemsSlice from "./items-slice";
/**
 * Configures the Redux store with application slices.
 *
 * Slices included:
 * - cartItems: manages shopping cart state (add/remove/update items)
 * - items: manages product listing, sorting, and filtering state
 *
 * Also exports:
 * - RootState: inferred type of the entire Redux state tree
 * - AppDispatch: inferred type of the store's dispatch function
 */

export const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
    items: itemsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
