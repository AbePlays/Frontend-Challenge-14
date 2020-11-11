import React, { useEffect, useState } from "react";
import Card from "./Card";

function Body() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for a country..."
            className="shadow px-16 py-3 w-full rounded text-gray-600"
          />
        </div>
        <div className="relative flex items-center bg-white px-4 shadow rounded text-gray-600 h-12 mt-8 sm:mt-0 w-48">
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
          <div className="absolute left-0 top-0 mt-16 px-6 py-4 bg-white w-48 shadow-lg rounded-lg text-sm">
            <p className="my-2 cursor-pointer">Africa</p>
            <p className="my-2 cursor-pointer">America</p>
            <p className="my-2 cursor-pointer">Asia</p>
            <p className="my-2 cursor-pointer">Europe</p>
            <p className="my-2 cursor-pointer">Oceania</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-8 mt-4 sm:mx-8 mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {countries.map((country) =>
          query.length === 0 ? (
            <Card
              imgUri={country.flag}
              capital={country.capital}
              name={country.name}
              population={country.population}
              region={country.region}
              key={country.numericCode}
            />
          ) : (
            country.name.includes(query) && (
              <Card
                imgUri={country.flag}
                capital={country.capital}
                name={country.name}
                population={country.population}
                region={country.region}
                key={country.numericCode}
              />
            )
          )
        )}
      </div>
    </>
  );
}

export default Body;
