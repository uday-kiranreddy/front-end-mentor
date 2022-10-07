import React, { useState } from "react";
import "./Nav.css";


function Nav() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <>
      {/* navbar */}
      <nav className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="nav-bar">
          <div className="nav-flex">
            <h2>Theme</h2>
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
