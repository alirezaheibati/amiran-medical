import { useSelector } from "react-redux";
import { RootState } from "../_store/store";
/**
 * Typed version of the `useSelector` hook for Redux.
 * Ensures that selected state conforms to the `RootState` type.
 *
 * @template TSelected - The type of the selected state.
 * @returns {(selector: (state: RootState) => TSelected) => TSelected} A typed selector function.
 */
export const useAppSelector = useSelector.withTypes<RootState>();
