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
    <div class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="wave-img">
        <img src={zikzakline} alt="zikzakline" />
      </div>
      <div class="lin-move">
        <img src={dortline} alt="dortline" />
      </div>
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="hero-text">
              <div class="vert-move">
                <img src={dot} alt="dot" />
              </div>
              <div class="hero-title">
                <div class="sub-tile">Welcome to troostudy</div>
                <div class="title">
                  <h1>
                    Providing <span>Best Education </span>
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
                    <Link href="#">View All Courses</Link>
                  </li>
                  <li class="call-ss">
                    <Link class="btnn btn-lg" href="#">
                      Contcat Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="dot-zik">
                <img src={twodot} alt="twodot" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="left-img-col">
              <div class="zoom-in-zoom-out">
                <img src={crose} alt="crose" />
              </div>
              <img src={personalGirl} alt="personalGirl" />
              <div class="vert-move">
                <img src={dotspacing} alt="dotspacing" />
              </div>
              <div class="loader-line">
                <img src={linespacing} alt="linespacing" />
              </div>
              <div class="mercury"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="radius">
        <span class="place"></span>
        <span class="border-animation ba1"></span>
        <span class="border-animation ba2"></span>
        <span class="border-animation ba3"></span>
      </div>
    </div>
  );
};

export default HeroComponent;
