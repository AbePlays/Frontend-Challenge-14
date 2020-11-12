import React from "react";
import { useSelector } from "react-redux";

function Card({ imgUri, name, population, region, capital }) {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <div
      className={`shadow rounded-md overflow-hidden ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="h-56">
        <img className="h-full w-full object-cover" src={imgUri} alt="Flag" />
      </div>
      <div className="px-6 py-6">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="mt-4 font-light text-sm">
          <span className="font-semibold ">Population: </span>
          {population}
        </p>
        <p className=" font-light  text-sm">
          <span className="font-semibold ">Region: </span>
          {region}
        </p>
        <p className=" font-light  text-sm mb-6">
          <span className="font-semibold ">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
