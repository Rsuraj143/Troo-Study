import React from "react";
import "./FetureComponent.css";
import facher from "../../images/facher-dots.png";
import feture1 from "../../images/feature-1.png";
import client1 from "../../images/client-1.png";
import feture2 from "../../images/feature-2.png";
import client2 from "../../images/client-2.png";
import feture3 from "../../images/feature-3.png";
import client3 from "../../images/client-3.png";
import feture4 from "../../images/feature-4.png";
import feture5 from "../../images/feature-5.png";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const FetureComponent = () => {
  return (
    <div class="troo-da-feature-section" id="troo-da-feature-section">
      <figure class="swing">
        {" "}
        <img src={facher} alt="facher" />
      </figure>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-tile-con">
              <div class="sub-txt">Feature Courses</div>
              <h2>
                Choose a Course to <br />
                <span> Get Started</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={feture1} alt="feture1" />
                <span>$40.00</span>
              </div>
              <div class="feat-text">
                <p>Managment</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>The Business Intelligence Analyst Course</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={client1} alt="client1" />
                  </div>
                  <div class="cli-text">
                    Prof.
                    <br /> Shawn Adward
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={feture2} alt="feture2" />
                <span>$40.00</span>
              </div>
              <div class="feat-text">
                <p>Language</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>German language Learning Course</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={client2} alt="client2" />
                  </div>
                  <div class="cli-text">
                    Prof.
                    <br />
                    Shawn Adward
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={feture3} alt="feture3" />
                <span>$40.00</span>
              </div>
              <div class="feat-text">
                <p>Architecture</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>Complete Advance Architecture Study</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={client3} alt="client3" />
                  </div>
                  <div class="cli-text">
                    Dr.
                    <br />
                    Julia heart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={feture4} alt="feture4" />
                <span>$40.00</span>
              </div>
              <div class="feat-text">
                <p>History</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>Intelligence Studies & International History </h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={client2} alt="client2" />
                  </div>
                  <div class="cli-text">
                    Prof.
                    <br /> Shawn Adward
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={feture5} alt="feture5" />
                <span>$40.00</span>
              </div>
              <div class="feat-text">
                <p>Research</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4> MScEcon International Finance (Specialist/Research)</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={client3} alt="client3" />
                  </div>
                  <div class="cli-text">
                    Dr.
                    <br />
                    Julia heart
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="more-course">
              <h4>5 More Cources</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and it also it
                typesetting industry.{" "}
              </p>
              <div class="call-ss">
                <Link class="btn btn-lg" href="#">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="loader-ss">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default FetureComponent;
