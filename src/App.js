import React, { useState, useEffect } from "react";
import "./App.css";
import "./Country.css";
import "./Nav.css";
import Nav from "./Nav";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormControl, InputLabel, NativeSelect, Button } from "@mui/material";
import Country from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    if (input) {
      const countryInput = await fetch(
        `https://restcountries.com/v3.1/name/${input}`
      );
      const dataCountryInput = await countryInput.json();
      setCountries(dataCountryInput);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <>
      <Nav />
      <div className="input-grids">
        <div className="left-grid" id="search-input">
          <OutlinedInput
            placeholder="🔍 Search Countries"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
          id="btn-search"
            onClick={() => fetchAllCountries()}
            variant="contained"
            color="secondary"
            style={{ marginLeft: "10px" }}
          >
            Search
          </Button>
        </div>
        {/* <div className="right-grid">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Select Countries by region
            </InputLabel>
            <NativeSelect style={{ marginRight: "20%" }}>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </NativeSelect>
          </FormControl>
        </div> */}
      </div>

      <div className="country-grid">
        {countries.map((country) => {
          return <Country key={country.name.official} contries={country} />;
        })}
      </div>
    </>
  );
}

export default App;
