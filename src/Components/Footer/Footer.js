import React from "react";
import "./Footer.css";
import wave from "../../images/bl-wave.png";
import footerLogo from "../../images/footer-logo.png";
import blueBottom from "../../images/blue-bottom.png";
import footline from "../../images/foot-line.png";
import {Link} from "react-router-dom"
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="troo-da-footer-section" id="troo-da-footer-section">
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="footer-address">
              <h4>Address</h4>
              <p>32 Park Row, Edinburgh United Kingdom, EH2 1TT</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mercury"></div>
            <div className="logo-link-ss">
              <div className="foot-logo">
                <img src={footerLogo} alt="footerLogo" />
              </div>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Cources</Link>
                </li>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="quadrado">
              <img src={blueBottom} alt="blueBottom" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="foot-cll">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Link to="/">+44 123 456 789</Link>
                </li>
                <li>
                  <Link to="/">+44 987 654 0123</Link>
                </li>
                <li>
                  <Link to="/">
                    trooeducation@email.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row botmff">
          <div className="col-md-6">
            <div className="copy-right-ss">
              <p>© 2023 TRoo Study by TRoo Theme. All rights reserved</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="foot-socail">
              <span>Social Media  :</span>
              <ul>
                <li>
                  <Link to="#">
                    <TiSocialFacebook/>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <TbBrandInstagram/>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <TiSocialLinkedin/>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <TiSocialTwitter/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="loader-line">
          <img src={footline} alt="footline" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
