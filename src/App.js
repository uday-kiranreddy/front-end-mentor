import React from "react";
import Header from "./components/Header";
import Countries from "./Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./components/Country";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Countries />}></Route>
          <Route
            path="/Countries/Country:passName"
            element={<Country />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
