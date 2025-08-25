import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../_interface/ProductType";

interface shopItemsState {
  items: ProductType[];
  filterModalVisibility: boolean;
  brand: string;
  areInStock: boolean;
  areInDiscount: boolean;
  price: { min: number; max: number };
  filteredItemsCount: number;
}
/**
 * Redux slice for managing shop item state.
 * Handles product listing, sorting, filtering, and UI modal visibility.
 *
 * State includes:
 * - items: full product list
 * - filterModalVisibility: toggle for filter modal
 * - brand: selected brand filter
 * - areInStock: stock availability filter
 * - areInDiscount: discount filter
 * - price: price range filter
 * - filteredItemsCount: count of items after filtering
 */

const initialState: shopItemsState = {
  items: [],
  filterModalVisibility: false,
  brand: "all",
  areInStock: false,
  areInDiscount: false,
  price: { min: 0, max: 0 },
  filteredItemsCount: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    /**
     * Sets the full list of shop items.
     * @param state - Current state
     * @param action - Array of ProductType items
     */
    setItems(state, action) {
      state.items = [...action.payload];
    },

    /**
     * Sorts items by date or price based on the given sort key.
     * @param state - Current state
     * @param action - Sort key: "date-desc", "price-desc", "price-asc", or default
     */
    sortItems(state, action) {
      if (action.payload === "date-desc") {
        state.items.sort((a, b) => b.date - a.date);
      } else if (action.payload === "price-desc") {
        state.items.sort((a, b) => b.price - a.price);
      } else if (action.payload === "price-asc") {
        state.items.sort((a, b) => a.price - b.price);
      } else {
        state.items.sort((a, b) => a.date - b.date);
      }
    },
    /**
     * Toggles the visibility of the filter modal.
     * @param state - Current state
     */
    toggleFilterModal(state) {
      state.filterModalVisibility = !state.filterModalVisibility;
    },
    /**
     * Sets the selected brand filter.
     * @param state - Current state
     * @param action - Brand name string
     */
    setBrand(state, action) {
      state.brand = action.payload;
    },
    /**
     * Sets the price range filter.
     * @param state - Current state
     * @param action - Object with min and max price values
     */
    setPrice(state, action) {
      state.price = {
        min: action.payload.min,
        max: action.payload.max,
      };
    },
    /**
     * Toggles the stock availability filter.
     * @param state - Current state
     */
    setAvailability(state) {
      state.areInStock = !state.areInStock;
    },
    /**
     * Toggles the discount filter.
     * @param state - Current state
     */
    setDisountStatus(state) {
      state.areInDiscount = !state.areInDiscount;
    },
    /**
     * Sets the count of items after filtering.
     * @param state - Current state
     * @param action - Number of filtered items
     */
    setFilteredItemsCount(state, action) {
      state.filteredItemsCount = action.payload;
    },
    /**
     * Resets all filters to their default values.
     * @param state - Current state
     */
    resetFilters(state) {
      state.brand = "all";
      state.areInDiscount = false;
      state.areInStock = false;
      state.filteredItemsCount = 0;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
