import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Switch} from "@mui/material";

function Header() {
  const changeTheme = () => {
    const header = document.querySelector(".header")    
   
    header.classList.toggle("light-theme")
    document.body.classList.toggle("light-theme")
  }
  return (
    <>
      <header className="header">
        <div>
          <h3>Where in the world?</h3>
        </div>
        <div className="theme-box" onClick={()=>changeTheme()}>
          Color Theme<Switch id="see-Morebtn" defaultChecked />
        </div>
      </header>
    </>
  );
}

export default Header;
