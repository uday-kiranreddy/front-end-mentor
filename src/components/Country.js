import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, capitalize } from "@mui/material";
import { Link } from "react-router-dom";

function Country() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  const { passName } = useParams();
  const fetchCountry = async () => {
    setLoading(true)
    const url = `https://restcountries.com/v3.1/name/${passName}`;
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    setLoading(false)
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  
  return (
    <div className="whole-countrybox">
      <Link to="/">
        <Button variant="contained" style={{ marginTop: "5px" ,marginLeft:"10%"}} size="small">
        ← Back Home
        </Button>
      </Link>
      <section className="country-detail">
        {country.map((item) => {
          const {
            flags,
            population,
            region,
            name,
            subregion,
            currencies,
            languages,
            capital,
            nativeName,
          } = item;
          return (
            <div key={name.official} className="country-page">
              <div>
                <img src={flags.svg} alt="" />
              </div>
              {loading && <h1 className="loader"></h1>}
              <div className="country-textbox">
                <h2>{name.official}</h2>
              
                <p>
                  Population : <span>{population}</span>
                </p>
                <p>
                  Region : <span>{region}</span>
                </p>
                <p>
                  Sub-Region : <span>{subregion}</span>
                </p>
                <p>
                  Capital: <span>{capital[0]}</span>
                </p>
                <p className="currency">
                  Currencies: <span>{Object.keys(currencies)}</span>
                </p>
                <p>
                  Languages: <span>{Object.keys(languages)}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Country;
