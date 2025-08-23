import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../_interface/CartItemType";

interface cartState {
  cart: CartItemType[];
}
// Initial state of the cart slice
const initialState: cartState = {
  cart: [],
};
/**
 * Redux slice for managing cart state.
 * Includes actions to add, remove, and update items in the cart.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Adds a new item to the cart.
     * @param {cartState} state - Current cart state.
     * @param {{ payload: CartItemType }} actions - Action containing the item to add.
     */
    addItem(state, actions) {
      state.cart = [...state.cart, actions.payload];
    },
    /**
     * Empties the cart by resetting it to an empty array.
     * @param {cartState} state - Current cart state.
     */
    emptyCart(state) {
      state.cart = [];
    },
    /**
     * Removes an item from the cart by its ID.
     * @param {cartState} state - Current cart state.
     * @param {{ payload: string }} actions - Action containing the ID of the item to remove.
     */
    removeItem(
      state,
      actions: {
        payload: string;
      }
    ) {
      state.cart = state.cart.filter((item) => !(actions.payload === item.id));
    },
    /**
     * Increases the quantity of a specific item in the cart.
     * @param {cartState} state - Current cart state.
     * @param {{ payload: string }} actions - Action containing the ID of the item to increase.
     */
    increaseItemAmount(
      state,
      actions: {
        payload: string;
      }
    ) {
      const item = state.cart.find((item) => actions.payload === item.id);
      if (item) {
        item.count += 1;
      }
    },
    /**
     * Decreases the quantity of a specific item in the cart, if count is greater than 1.
     * @param {cartState} state - Current cart state.
     * @param {{ payload: string }} actions - Action containing the ID of the item to decrease.
     */
    decreaseItemAmount(
      state,
      actions: {
        payload: string;
      }
    ) {
      const item = state.cart.find((item) => actions.payload === item.id);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
  },
});
export const cartSliceActions = cartSlice.actions;
export default cartSlice;
