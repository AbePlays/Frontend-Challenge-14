import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../actions/index";

function Header() {
  const isDark = useSelector((state) => state.darkMode);
  const dipatch = useDispatch();

  return (
    <header
      className={`flex justify-between py-6 sm:px-10 px-4 shadow items-center  ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="font-bold text-lg">Where in the world?</h1>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => dipatch(toggle())}
      >
        <svg
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <p className="ml-2 font-light">Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
