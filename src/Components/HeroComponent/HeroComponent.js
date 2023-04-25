import React from "react";
import "./HeroComponent.css";
import zikzakline from "../../images/zik-zak-line.png";
import dortline from "../../images/dot-line.png";
import twodot from "../../images/two-dot.png"
import crose from "../../images/crose.png"
import dot from "../../images/bg-dots.png";
import dotspacing from "../../images/dot-spcing.png"
import linespacing from "../../images/line.png"
import personalGirl from "../../images/person-girl.png"

import {Link} from "react-router-dom"

const HeroComponent = () => {
  return (
    <div className="troo-da-hero-section" id="troo-da-hero-section">
      <div className="wave-img">
        <img src={zikzakline} alt="zikzakline" />
      </div>
      <div className="lin-move">
        <img src={dortline} alt="dortline" />
      </div>
      <div className="spinner-wrap">
        <div className="spinner-item"></div>
        <div className="spinner-item spinner-item--2"></div>
        <div className="spinner-item spinner-item--3"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="hero-text">
              <div className="vert-move">
                <img src={dot} alt="dot" />
              </div>
              <div className="hero-title">
                <div className="sub-tile">Welcome to troostudy</div>
                <div className="title">
                  <h1>
                    Providing <span>Best Education  </span>
                      For <strong>Brighter future</strong>
                  </h1>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul>
                  <li>
                    <Link to="/Home/Courses">View All Courses</Link>
                  </li>
                  <li className="call-ss">
                    <Link className="btnn btn-lg" to="/Home/Contact_Us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dot-zik">
                <img src={twodot} alt="twodot" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="left-img-col">
              <div className="zoom-in-zoom-out">
                <img src={crose} alt="crose" />
              </div>
              <img src={personalGirl} alt="personalGirl" />
              <div className="vert-move">
                <img src={dotspacing} alt="dotspacing" />
              </div>
              <div className="loader-line">
                <img src={linespacing} alt="linespacing" />
              </div>
              <div className="mercury"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="radius">
        <span className="place"></span>
        <span className="border-animation ba1"></span>
        <span className="border-animation ba2"></span>
        <span className="border-animation ba3"></span>
      </div>
    </div>
  );
};

export default HeroComponent;
