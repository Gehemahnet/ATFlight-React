import React from "react";
import { Link } from 'react-router-dom';
import "../styles/footer.css";
import logoImg from "../images/header/logo-img.svg";
import logoText from "../images/header/logo-txt.svg";
import tgLogo from "../images/footer/telegram.svg";
import fbLogo from "../images/footer/facebook.svg";
import igLogo from "../images/footer/instagram.svg";
import waLogo from "../images/footer/whatsapp.svg";
import ptLogo from "../images/footer/pinterest.svg";
import ldLogo from "../images/footer/linkedin.svg";
import twLogo from "../images/footer/twitter.svg";

const Footer = () => {

  return(
    <footer>
      <div className="wrapper _footer">
        <div className="footer__top">
          <div className="footer__logo">
                <img src={logoImg}/>
                <img src={logoText}/>
            </div>
            <div className="footer__navigation">
              <Link to={"/"} className="footer__link">Home</Link>
              <Link to={"/blog"} className="footer__link">Blog</Link>
              <Link to={"/adds"} className="footer__link">Add's</Link>
              <Link to={"/settings"} className="footer__link">Settings</Link>
            </div>
            <div className="footer__social-media">
              <a className="footer__social-media-link" href=""><img src={fbLogo}/></a>
              <a className="footer__social-media-link" href="twitter.com"><img src={twLogo}/></a>
              <a className="footer__social-media-link" href=""><img src={tgLogo}/></a>
              <a className="footer__social-media-link" href=""><img src={igLogo}/></a>
              <a className="footer__social-media-link" href=""><img src={waLogo}/></a>
              <a className="footer__social-media-link" href=""><img src={ptLogo}/></a>
              <a className="footer__social-media-link" href=""><img src={ldLogo}/></a>
            </div>
        </div>
        <div className="footer__bottom">
          <span>(c) AT.Flights — All Rights reserved</span>
        </div>
      </div>
    </footer>

  )
}


export default Footer