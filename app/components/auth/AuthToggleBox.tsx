"use client";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
/**
 * AuthToggleBox component provides a UI toggle between login and registration forms.
 * Displays the appropriate form based on internal state and includes a switch prompt below.
 *
 * @component
 * @returns {JSX.Element} A styled authentication box with toggle buttons and conditional rendering
 */
export default function AuthToggleBox() {
  const [authState, setAuthState] = useState<"register" | "login">("register");
  function authStateChangeHandler(state: "register" | "login") {
    setAuthState(state);
  }
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
        <div className="flex justify-center items-center ">
          <button
            className={`flex-1/2 h-12 cursor-pointer ${
              authState === "login"
                ? " bg-[#003d5b] text-white/80 "
                : "bg-gray-200 text-[#003d5b]"
            } `}
            onClick={() => authStateChangeHandler("login")}
          >
            ورود
          </button>
          <button
            className={`flex-1/2 h-12 cursor-pointer ${
              authState === "register"
                ? " bg-[#003d5b] text-white/80 "
                : "bg-gray-200 text-[#003d5b]"
            } `}
            onClick={() => authStateChangeHandler("register")}
          >
            ثبت نام
          </button>
        </div>
        {/* login component */}
        {authState === "login" && <Login />}
        {authState === "register" && <Register />}
      </div>
      <p className="text-sm text-white/80">
        {authState === "login"
          ? "حساب کاربری نداری؟"
          : "قبلا ثبت نام کرده اید؟"}
        <button
          className="mr-1 font-semibold text-[#edae49]/90 cursor-pointer hover:text-[#edae49]"
          onClick={() =>
            authStateChangeHandler(
              authState === "register" ? "login" : "register"
            )
          }
        >
          {authState === "login" ? "ثبت نام" : "ورود به اکانت"}
        </button>
      </p>
    </>
  );
}
