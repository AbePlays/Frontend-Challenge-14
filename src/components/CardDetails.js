import React from "react";

function CardDetails(country) {
  const langs = ["Hindi", "English", "Korean"];

  return (
    <div className="bg-gray min-h-screen sm:px-10 px-4">
      <div className="flex items-center justify-center py-1 my-10 font-light bg-gray-100 w-32 rounded shadow-lg">
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
            src="https://restcountries.eu/data/afg.svg"
            alt="flag"
          />
        </div>
        <div className="self-center">
          <h1 className="font-bold text-3xl">Belgium</h1>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <p className="font-light my-1">
                <span className="font-semibold">Native Name: </span>Belgie
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Population: </span>123456789
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Region: </span>Europe
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Sub Region: </span>Western
                Europe
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Capital: </span>Brussels
              </p>
            </div>
            <div>
              <p className="font-light my-1">
                <span className="font-semibold">Top Level Domain: </span>.be
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Currencies: </span>Euro
              </p>
              <p className="font-light my-1">
                <span className="font-semibold">Languages: </span>Dutch, French,
                German
              </p>
            </div>
          </div>
          <div className="my-8">
            <p className="inline font-semibold">Border Countries:</p>
            <div className="flex gap-2 flex-wrap mt-2">
              {langs.map((lang) => {
                return (
                  <span className="px-6 py-1 bg-gray-100 rounded shadow font-light text-sm">
                    {lang}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
