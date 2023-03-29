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
    <div class="troo-da-footer-section" id="troo-da-footer-section">
      <div class="wave">
        <img src={wave} alt="wave" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="footer-address">
              <h4>Address</h4>
              <p>32 Park Row, Edinburgh United Kingdom, EH2 1TT</p>
            </div>
          </div>
          <div class="col-md-8">
            <div class="mercury"></div>
            <div class="logo-link-ss">
              <div class="foot-logo">
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
            <div class="quadrado">
              <img src={blueBottom} alt="blueBottom" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="foot-cll">
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
        <div class="row botmff">
          <div class="col-md-6">
            <div class="copy-right-ss">
              <p>© 2022 Restaurant Theme by Troo Theme. All rights reserved</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="foot-socail">
              <span>Social Media</span>
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
        <div class="loader-line">
          <img src={footline} alt="footline" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
