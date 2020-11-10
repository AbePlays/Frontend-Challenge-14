import React from "react";

function Body() {
  return (
    <div>
      <div className="mx-8 mt-8 min-h-screen relative">
        <svg
          className="h-6 w-6 text-gray-600 absolute mt-3 ml-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for a country..."
          className="shadow px-16 py-3 rounded text-gray-600"
        />
      </div>
    </div>
  );
}

export default Body;
