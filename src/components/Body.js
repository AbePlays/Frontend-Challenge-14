import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./spinner.css";

function Body() {
  const isDark = useSelector((state) => state.darkMode);
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const getAllData = async () => {
    setLoading(true);
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    setCountries(data);
    setLoading(false);
  };

  const getRegionData = async (region) => {
    setLoading(true);
    const res = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const data = await res.json();
    setCountries(data);
    setShowMenu(false);
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="sm:flex justify-between sm:mx-8 mx-4 sm:mt-8 mt-4 text-sm">
        <div className={`h-12 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <svg
            className={`h-6 w-6 absolute mt-3 ml-6 ${
              !isDark ? "text-gray-800" : "text-white"
            }`}
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
            className={`shadow px-16 py-3 w-full rounded placeholder-current ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          />
        </div>
        <div
          className={`relative flex items-center px-4 shadow rounded h-12 my-8 sm:mb-0 sm:mt-0 w-48 ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <p className="font-light">Filter by Region</p>
          <svg
            onClick={() => setShowMenu((prev) => !prev)}
            className="h-4 ml-8 cursor-pointer"
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
          {showMenu && (
            <div
              className={`absolute left-0 top-0 mt-16 px-6 py-2 w-48 shadow-lg rounded text-sm ${
                isDark
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900 border"
              }`}
            >
              <p
                onClick={() => getRegionData("africa")}
                className="my-2 cursor-pointer"
              >
                Africa
              </p>
              <p
                onClick={() => getRegionData("america")}
                className="my-2 cursor-pointer"
              >
                America
              </p>
              <p
                onClick={() => getRegionData("asia")}
                className="my-2 cursor-pointer"
              >
                Asia
              </p>
              <p
                onClick={() => getRegionData("europe")}
                className="my-2 cursor-pointer"
              >
                Europe
              </p>
              <p
                onClick={() => getRegionData("oceania")}
                className="my-2 cursor-pointer"
              >
                Oceania
              </p>
            </div>
          )}
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center my-40">
          <div class="lds-dual-ring"></div>
        </div>
      )}
      <div className="sm:mt-8 mt-4 sm:mx-8 mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {countries.map((country) =>
          query.length === 0 ? (
            <Link
              key={country.numericCode}
              to={{
                pathname: "/Frontend-Challenge-14/details",
                state: {
                  country: country,
                },
              }}
            >
              <Card
                imgUri={country.flag}
                capital={country.capital}
                name={country.name}
                population={country.population}
                region={country.region}
              />
            </Link>
          ) : (
            country.name.includes(query) && (
              <Link
                key={country.numericCode}
                to={{
                  pathname: "/Frontend-Challenge-14/details",
                  state: {
                    country: country,
                  },
                }}
              >
                <Card
                  imgUri={country.flag}
                  capital={country.capital}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                />
              </Link>
            )
          )
        )}
      </div>
    </>
  );
}

export default Body;
