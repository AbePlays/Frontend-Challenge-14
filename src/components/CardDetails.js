import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
};

function CardDetails(props) {
  const history = useHistory();
  const country = props.location.state.country;
  const isDark = useSelector((state) => state.darkMode);

  const getString = (arr) => {
    var array = [];
    arr.forEach((item) => {
      array.push(item.name);
    });
    return array.join(", ");
  };

  return (
    <motion.div
      className="sm:px-10 px-4"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className={`flex items-center justify-center py-1 my-10 font-light w-32 rounded shadow  cursor-pointer ${
          isDark ? "bg-gray-800 text-white" : "bg-white border text-gray-900"
        }`}
        onClick={() => history.replace("/Frontend-Challenge-14")}
      >
        <svg
          className="h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <p className="ml-4">Back</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-32 gap-y-8 text-gray-800">
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={country.flag}
            alt="flag"
          />
        </div>
        <div
          className={`self-center ${isDark ? "text-white" : "text-gray-900"}`}
        >
          <h1 className="font-bold text-3xl">{country.name}</h1>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <p className="font-light my-1">
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Population: </span>
                {country.population}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="font-light my-1">
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain[0]}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Currencies: </span>
                {getString(country.currencies)}
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Languages: </span>
                {getString(country.languages)}
              </p>
            </div>
          </div>
          <div className="my-8">
            <p className="inline font-semibold">Border Countries:</p>
            <div className="flex gap-2 flex-wrap mt-2">
              {country.borders.map((name) => {
                return (
                  <span
                    className={`px-6 py-1 rounded shadow font-light text-sm ${
                      isDark
                        ? "bg-gray-800 text-white"
                        : "bg-white border text-gray-900"
                    }`}
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardDetails;
