import React, { useState, useEffect } from "react";

import "./App.css";

import DesktopView from "./assets/images/design/desktop-design-home-light.jpg";

import Header from "./components/Header/Header";

import Data_URL from "./apis/data.json";

function App() {
  return (
    <>
      <Header />

      {/* Form controls */}
      <div className="search-country-controls">
        <div className="wrapper search-country-controls-wrapper">
          <input type="text" className="search-country-input" />
          <div className="select-country">
            <select>
              <option value="">Filter by Region</option>
              <option value="india">India</option>
              <option value="new Zealand">New Zealand</option>
              <option value="germany">Germany</option>
              <option value="switzerland">Switzerland</option>
              <option value="japan">Japan</option>
              <option value="japan">Australia</option>
            </select>
          </div>
        </div>
      </div>
      {/* Countries */}
      <div className="countries-container">
        <div className="wrapper ">
          <div className="countries-wrapper">
            {Data_URL
              ? Data_URL.map((country) => {
                  console.log(country);
                  return (
                    <div className="country-card" key={country.name}>
                      <div className="country-card-flag-img">
                        <img src={country.flag} alt={country.name} />
                      </div>
                      <div className="country-info">
                        <div className="country-name">
                          <h3>{country.name}</h3>
                          <p>
                            <strong>Population:</strong> {country.population}
                          </p>
                          <p>
                            <strong>Population:</strong> {country.population}
                          </p>
                          <p>
                            <strong>Capital:</strong> {country.capital}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "Something is went wrong, Please try again!"}
          </div>
        </div>
      </div>

      <div className="ui-check">
        <img src={DesktopView} alt="test" />
      </div>
    </>
  );
}

export default App;
