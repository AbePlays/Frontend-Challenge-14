import React from "react";

function Card({ imgUri, name, population, region, capital }) {
  return (
    <div className="shadow-lg rounded-md bg-white overflow-hidden">
      <div className="h-56">
        <img className="h-full w-full object-cover" src={imgUri} alt="Flag" />
      </div>
      <div className="px-6 py-6">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="mt-4 font-light text-gray-600 text-sm">
          <span className="font-semibold text-gray-800">Population: </span>
          {population}
        </p>
        <p className=" font-light text-gray-600 text-sm">
          <span className="font-semibold text-gray-800">Region: </span>
          {region}
        </p>
        <p className=" font-light text-gray-600 text-sm mb-6">
          <span className="font-semibold text-gray-800">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
