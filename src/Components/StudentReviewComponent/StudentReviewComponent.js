import React from "react";
import "./StudentReviewComponent.css";
import fatcher from "../../images/facher-dots.png";
import { Link } from "react-router-dom";
import vector from "../../images/say-vector.png";
import { ReviewData } from "./ReviewData";

const StudentReviewComponent = () => {
  return (
    <div
      className="troo-da-students-says-section"
      id="troo-da-students-says-section"
    >
      <figure className="swing">
        <img src={fatcher} alt="fatcher" />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-tile-con">
              <div className="sub-txt">Our Stuents Review</div>
              <h2>
                What <span> Students </span> Says
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {ReviewData.slice(0, 3).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className="feature-sec">
                <div className="feat-text">
                  <div className="studen-tile">
                    <span>“</span>
                    <h4>{e.title} </h4>
                  </div>
                  <p>{e.message}</p>
                  <div className="client-col">
                    <div className="cli-text">
                     <div> {e.name}</div>
                      <div className="clg">{e.clg} </div>
                    </div>
                    <div className="cli-img">
                      <img src={e.img} alt="student1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {ReviewData.slice(3, 5).map((e, i) => (
            <div className="col-md-4" key={i}>
              <div className="feature-sec">
                <div className="feat-text">
                  <div className="studen-tile">
                    <span>“</span>
                    <h4>{e.title} </h4>
                  </div>
                  <p>{e.message}</p>
                  <div className="client-col">
                    <div className="cli-text">
                      <div>{e.name}</div>
                      <div className="clg">{e.clg} </div>
                    </div>
                    <div className="cli-img">
                      <img src={e.img} alt="student1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-4">
            <div className="more-course">
              <h4>
                40+ <br /> More Revivew
              </h4>
              <div className="call-ss">
                <Link className="btnn btn-lg" to="/Home/Pages/Teastimonial">
                  Read All Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quadrado">
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default StudentReviewComponent;
