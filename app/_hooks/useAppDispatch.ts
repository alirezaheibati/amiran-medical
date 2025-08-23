import { useDispatch } from "react-redux";
import { AppDispatch } from "../_store/store";
/**
 * Typed version of the `useDispatch` hook for Redux.
 * Ensures that dispatched actions conform to the `AppDispatch` type.
 *
 * @returns {AppDispatch} A typed dispatch function for Redux actions.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
