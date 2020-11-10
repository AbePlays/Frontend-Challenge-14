import React from "react";
import Card from "./Card";

function Body() {
  return (
    <>
      <div className="sm:flex justify-between sm:mx-8 mx-4 sm:mt-8 mt-4">
        <div className="h-12">
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
            className="shadow px-16 py-3 w-full rounded text-gray-600"
          />
        </div>
        <div className="flex items-center bg-white px-4 shadow rounded text-gray-600 h-12 mt-8 sm:mt-0 w-48">
          <p className="font-light">Filter by Region</p>
          <svg
            className="h-4 ml-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Body;
