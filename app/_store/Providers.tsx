"use client";

import { Provider } from "react-redux";
import { store } from "./store";
/**
 * Wraps the application with the Redux Provider to enable global state management.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components that will have access to the Redux store.
 * @returns {JSX.Element} A React component that provides the Redux store to its children.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
