import React from "react";
import "./AboutComponent.css";
import bigcross from "../../images/big-crose.png";
import checkCircle from "../../images/check-circle.png";
import greencross from "../../images/green-crose.png";
import { Link } from "react-router-dom";
import who1 from "../../images/who-1.png";
import who2 from "../../images/who-2.png";
import who3 from "../../images/who-3.png";

const AboutComponent = () => {
  return (
    <div class="troo-da-who-we-are-section" id="troo-da-who-we-are-section">
      <div class="quadrado">
        <img src={bigcross} alt="bigcross" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="who-we-are-text">
              <div class="sub-tile-con">
                <div class="sub-txt">Who We Are</div>
                <h2>
                  We Are Largest <span>Education Platform</span>
                </h2>
              </div>
              <strong>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry.
              </strong>
              <p>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <ul>
                <li>
                  <img src={checkCircle} alt="checkCircle" />
                  <span>
                    Emergency response time is one hour or less guaranteed.
                  </span>
                </li>
                <li>
                  <img src={checkCircle} alt="checkCircle" />
                  <span>
                    We want you to be completely satisfied with our services.
                  </span>
                </li>
                <li>
                  <img src={checkCircle} alt="checkCircle" />
                  <span>
                    You deserve to have your questions answered in plain
                    English.{" "}
                  </span>
                </li>
                <li>
                  <img src={checkCircle} alt="checkCircle" />

                  <span>
                    Our service philosophy is proactive, not reactive.
                  </span>
                </li>
                <li>
                  <img src={checkCircle} alt="checkCircle" />

                  <span>
                    We hire only seasoned, professional technicians with at
                    least 5-10 years experience and usually many more.
                  </span>
                </li>
              </ul>
              <div class="cta-section">
                <div class="call-ss">
                  <Link class="btnn btn-lg" to="#">
                    Learn More
                  </Link>
                </div>
                <div class="cta-r">OR</div>
                <div class="cal-col">
                  <span>Call Us on</span>
                  <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="who-we-are-img">
              <div class="row">
                <div class="zoomm">
                  <img src={greencross} alt="greencross" />
                </div>
                <div class="col-md-6">
                  <img src={who1} alt="who1" />
                </div>
                <div class="col-md-6">
                  <img src={who2} alt="who2" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="boto-img">
                    <img src={who3} alt="who3" />
                  </div>
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
