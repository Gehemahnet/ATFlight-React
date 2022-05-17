import React from "react";
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
              <a className="footer__link">Home</a>
              <a className="footer__link">Blog</a>
              <a className="footer__link">Add's</a>
              <a className="footer__link">Settings</a>
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