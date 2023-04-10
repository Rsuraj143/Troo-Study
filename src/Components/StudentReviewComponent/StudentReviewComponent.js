import React from "react";
import "./StudentReviewComponent.css";
import fatcher from "../../images/facher-dots.png";
import { Link } from "react-router-dom";
import vector from "../../images/say-vector.png";
import { ReviewData } from "./ReviewData";

const StudentReviewComponent = () => {
  return (
    <div
      class="troo-da-students-says-section"
      id="troo-da-students-says-section"
    >
      <figure class="swing">
        <img src={fatcher} alt="fatcher" />
      </figure>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-tile-con">
              <div class="sub-txt">Our Stuents Review</div>
              <h2>
                What <span> Students </span> Says
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {ReviewData.slice(0, 3).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="feature-sec">
                <div class="feat-text">
                  <div class="studen-tile">
                    <span>“</span>
                    <h4>{e.title} </h4>
                  </div>
                  <p>{e.message}</p>
                  <div class="client-col">
                    <div class="cli-text">
                     <div> {e.name}</div>
                      <div class="clg">{e.clg} </div>
                    </div>
                    <div class="cli-img">
                      <img src={e.img} alt="student1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {ReviewData.slice(3, 5).map((e, i) => (
            <div class="col-md-4" key={i}>
              <div class="feature-sec">
                <div class="feat-text">
                  <div class="studen-tile">
                    <span>“</span>
                    <h4>{e.title} </h4>
                  </div>
                  <p>{e.message}</p>
                  <div class="client-col">
                    <div class="cli-text">
                      <div>{e.name}</div>
                      <div class="clg">{e.clg} </div>
                    </div>
                    <div class="cli-img">
                      <img src={e.img} alt="student1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div class="col-md-4">
            <div class="more-course">
              <h4>
                40+ <br /> More Revivew
              </h4>
              <div class="call-ss">
                <Link class="btnn btn-lg" href="#">
                  Read All Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quadrado">
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default StudentReviewComponent;
