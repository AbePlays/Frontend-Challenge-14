import React from "react";
import { useSelector } from "react-redux";

function NotFound() {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <div
      className={`my-16 ${isDark ? "text-white" : "bg-white text-gray-900"}`}
    >
      <p className="text-xl text-center">Sorry, this page does not exist :(</p>
    </div>
  );
}

export default NotFound;
