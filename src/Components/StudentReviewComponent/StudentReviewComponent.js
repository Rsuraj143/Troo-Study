import React from "react";
import "./StudentReviewComponent.css";
import fatcher from "../../images/facher-dots.png";
import student1 from "../../images/students-1.png";
import student2 from "../../images/students-2.png";
import student3 from "../../images/students-3.png";
import { Link } from "react-router-dom";
import vector from "../../images/say-vector.png";

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
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feat-text">
                <div class="studen-tile">
                  <span>“</span>
                  <h4>I must say I am very impressed.</h4>
                </div>
                <p>
                  Lorem Ipsum is it simply dummy text of the printing and it is
                  typesetting industry. Lorem Ipsum it is has been the
                  industry's standard dummy text ever since
                </p>
                <div class="client-col">
                  <div class="cli-text">
                    Arjun Pandit
                    <span>MBA Student, Leeds University</span>
                  </div>
                  <div class="cli-img">
                    <img src={student1} alt="student1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feat-text">
                <div class="studen-tile">
                  <span>“</span>
                  <h4>Great and memorable experience .</h4>
                </div>
                <p>
                  Lorem Ipsum is it simply dummy text of the printing and it is
                  typesetting industry. Lorem Ipsum it is has been the
                  industry's standard dummy text ever since
                </p>
                <div class="client-col">
                  <div class="cli-text">
                    Sunita Nilson
                    <span>Arts Student, Gujarat University</span>
                  </div>
                  <div class="cli-img">
                    <img src={student2} alt="student2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feat-text">
                <div class="studen-tile">
                  <span>“</span>
                  <h4>Always believed in helping & guiding</h4>
                </div>
                <p>
                  Lorem Ipsum is it simply dummy text of the printing and it is
                  typesetting industry. Lorem Ipsum it is has been the
                  industry's standard dummy text ever since
                </p>
                <div class="client-col">
                  <div class="cli-text">
                    Deepak Kumar Jha
                    <span>BCA Student, Sharda University</span>
                  </div>
                  <div class="cli-img">
                    <img src={student3} alt="student3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feat-text">
                <div class="studen-tile">
                  <span>“</span>
                  <h4>warm, friendly atmosphere.</h4>
                </div>
                <p>
                  Lorem Ipsum is it simply dummy text of the printing and it is
                  typesetting industry. Lorem Ipsum it is has been the
                  industry's standard dummy text ever since
                </p>
                <div class="client-col">
                  <div class="cli-text">
                    Anonymous
                    <span>Arts Student, Gujarat University</span>
                  </div>
                  <div class="cli-img">
                    <img src={student2} alt="student2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feat-text">
                <div class="studen-tile">
                  <span>“</span>
                  <h4>Definitely the right choice for him</h4>
                </div>
                <p>
                  Lorem Ipsum is it simply dummy text of the printing and it is
                  typesetting industry. Lorem Ipsum it is has been the
                  industry's standard dummy text ever since
                </p>
                <div class="client-col">
                  <div class="cli-text">
                    Cindy Martinez
                    <span>BCA Student, Sharda University</span>
                  </div>
                  <div class="cli-img">
                    <img src={student2} alt="student1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="more-course">
              <h4>
                40+ <br /> More Revivew
              </h4>
              <div class="call-ss">
                <Link class="btn btn-lg" href="#">
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
