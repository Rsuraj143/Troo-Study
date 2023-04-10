import React from "react";
import "./PartnerComponent.css";
import logo1 from "../../images/logo-1.png";
import logo2 from "../../images/logo-2.png";
import logo3 from "../../images/logo-3.png";
import logo4 from "../../images/logo-4.png";
import logo5 from "../../images/logo-5.png";
import logo6 from "../../images/logo-6.png";
import logo7 from "../../images/logo-7.png";
import logo8 from "../../images/logo-8.png";
import { Link } from "react-router-dom";

const PartnerComponent = () => {
  return (
    <div className="troo-da-our-partner-section" id="troo-da-our-partner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="partner-text">
              <div className="sub-tile-con">
                <div className="sub-txt">Our Partner</div>
                <h2>
                  We collabrate <span> 250+</span>
                  <br />
                  Colleges & Universities
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
              <h6>
                Want to become our partner ?
                <Link href="#">Contact With Us </Link>
              </h6>
            </div>
          </div>
          <div className="col-md-8">
            <div className="spinner-wraps">
              <div className="spinner-items"></div>
              <div className="spinner-items spinner-items--2"></div>
              <div className="spinner-items spinner-items--3"></div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo1} alt="logo1" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo2} alt="logo2" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo3} alt="logo3" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="logo-ss">
                  <img src={logo4} alt="logo4" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logo-ss">
                  <img src={logo5} alt="logo5" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logo-ss">
                  <img src={logo6} alt="logo6" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logo-ss">
                  <img src={logo7} alt="logo7" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo8} alt="logo8" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo5} alt="logo5" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="logo-ss">
                  <img src={logo2} alt="logo2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;
