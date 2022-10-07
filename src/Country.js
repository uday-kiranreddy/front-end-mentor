import React from "react";
import "./Country.css";

function Country({ contries }) {
  const { population, region, capital } = contries;
  return (
      <>
        <div className="singleFlag-box">
          <img src={contries.flags.png} alt="" />
          <h2>{contries.name.official}</h2>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>capital: {capital}</p>
        </div>
      </>
  );
}

export default Country;
