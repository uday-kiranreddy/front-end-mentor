import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ];
  const fetchCountries = async () => {
    try {
      if (input) {
        setLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/name/${input}`);
        const countryName = await res.json();
        setCountries(countryName);
        setLoading(false);
      } else {
        setLoading(true);
        const url = "https://restcountries.com/v3.1/all";
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCountryByRegion = async (value) => {
    setLoading(true);
    const regionFetch = await fetch(
      `https://restcountries.com/v3.1/region/${value}`
    );
    const final = await regionFetch.json();
    setCountries(final);
    setLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <div className="filters">
        <div className="left">
          <input
            type="search"
            name="Search"
            id="search"
            placeholder="🔍 Search by country Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginTop: "5px" }}
            size="small"
            onClick={fetchCountries}
          >
            Search
          </Button>
        </div>
        <div className="right">
          <select
            name="select"
            id="select"
            value={region.name}
            onChange={(e) => fetchCountryByRegion(e.target.value)}
          >
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
      </div>

      {loading && <h1 className="loader"></h1>}

      <section className="countries">
        {countries.map((country) => {
          const { flags, name, population, region, capital, numericCode } =
            country;
          const passName = name.official;
          return (
            <div key={passName} className="countries-box">
              <img src={flags.png} alt={passName} />
              <div className="text-content">
                <h3>{name.official}</h3>
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>
                </p>
                <p>
                  Capital: <span>{capital}</span>
                </p>
                <Link to={`/Countries/Country${passName}`}>
                  <Button
                    variant="contained"
                    style={{ marginTop: "5px" }}
                    size="small"
                    id="see-more"
                  >
                    See More
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Countries;
