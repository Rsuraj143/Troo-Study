import React from 'react'
import { ReviewData } from "./ReviewData";
import fatcher from "../../images/facher-dots.png";
import "./StudentReviewComponent.css";


const StudentReviewComponent2 = () => {
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
                      {e.name}
                      <span>{e.clg} </span>
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
          {ReviewData.slice(3,6).map((e, i) => (
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
                      {e.name}
                      <span>{e.clg} </span>
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
          {ReviewData.slice(6,9).map((e, i) => (
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
                      {e.name}
                      <span>{e.clg} </span>
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
          {ReviewData.slice(9,12).map((e, i) => (
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
                      {e.name}
                      <span>{e.clg} </span>
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
      </div>
    </div>
  )
}

export default StudentReviewComponent2