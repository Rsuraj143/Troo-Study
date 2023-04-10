import React from "react";
import { ReviewData } from "./ReviewData";
import fatcher from "../../images/facher-dots.png";
import "./StudentReviewComponent.css";

const StudentReviewComponent2 = () => {
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
        </div>
        <div className="row">
          {ReviewData.slice(3, 6).map((e, i) => (
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
        </div>
        <div className="row">
          {ReviewData.slice(6, 9).map((e, i) => (
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
        </div>
        <div className="row">
          {ReviewData.slice(9, 12).map((e, i) => (
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
        </div>
      </div>
    </div>
  );
};

export default StudentReviewComponent2;
