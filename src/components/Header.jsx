import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/header.css"
import logoImg from "../images/header/logo-img.svg";
import logoText from "../images/header/logo-txt.svg";
import notificationBell from "../images/header/bell.svg";
import themeSwitcher from "../images/header/theme.svg";
import Button from "./UI/button/Button";
import UserPopup from "./UI/UserPopup";

const Header = ( {loginPopupVisible, setVisible} ) => {
  const [activeLink, setActiveLink] = useState(document.location.pathname.split('/')[1])
  const [userEntered, setUserEntered] = useState(false)
  

  const activateLink = (e) => {
    setActiveLink(e.target.innerHTML.toLowerCase())
  }
  
  return(
    <header>
      <div className='wrapper _header'>
        <div className="header__logo">
            <img src={logoImg}/>
            <img src={logoText}/>
        </div>

        <div className="header__navigation">

          <Link
            onClick={activateLink}
            to="/" 
            className={activeLink== "home"? "header__link header__link_active" : "header__link" }
          >
            Home
          </Link>
          <Link
            onClick={activateLink}
            to="/blog" 
            className={activeLink== "blog"? "header__link header__link_active" : "header__link" }
          >
            Blog
          </Link>
          <Link
            onClick={activateLink}
            to="/adds" 
            className={activeLink== "add's"? "header__link header__link_active" : "header__link" }
          >
            Add's</Link>
          <Link
            onClick={activateLink}
            to="/settings" 
            className={activeLink== "settings"? "header__link header__link_active" : "header__link" }
          >
            Settings
          </Link>
          <button

            id="header__notification" 
            className="header__link">
            <img src={notificationBell}/>
          </button>

        </div>

        <Button 
          id="header__login-button"  
          text={"Login"}
          onClick={ () => {
            setVisible(true)
          }}
        />
        <UserPopup
          visible={loginPopupVisible}
          setVisible={setVisible}
        />
        <div className="header__theme-switcher">
          <img id="theme-switcher" src={themeSwitcher}/>
        </div>

      </div>
    </header>
  )
}

export default Header