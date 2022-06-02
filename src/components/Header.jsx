import React from "react";
import "../styles/header.css"
import logoImg from "../images/header/logo-img.svg";
import logoText from "../images/header/logo-txt.svg";
import notificationBell from "../images/header/bell.svg";
import themeSwitcher from "../images/header/theme.svg";
import Button from "./UI/button/Button";

const Header = function() {
  return(
    <header>
      <div className='wrapper _header'>
        <div className="header__logo">
            <img src={logoImg}/>
            <img src={logoText}/>
        </div>
        <div className="header__navigation">
          <a className="header__link header__link_active">Home</a>
          <a className="header__link">Blog</a>
          <a className="header__link">Add's</a>
          <a className="header__link">Settings</a>
          <a id="header__notification" className="header__link"><img src={notificationBell}/></a>
        </div>
        <Button id="header__login-button" 
                text={"Login"}
                // onClick
        />
        <div className="header__theme-switcher">
          <img id="theme-switcher" src={themeSwitcher}/>
        </div>
      </div>
    </header>
  )
}

export default Header