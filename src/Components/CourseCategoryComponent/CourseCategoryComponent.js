import React from "react";
import "./CourseCategoryComponent.css";
import arrow from "../../images/arrow.png";
import coin from "../../images/coins.png";
import usercheck from "../../images/user-check.png";
import flower from "../../images/flower-photos.png";
import enternainment from "../../images/entertainment.png";
import computerdatabase from "../../images/computer-database.png";
import healthmediacal from "../../images/health-medical-heart.png";
import recording from "../../images/entertainment-recording.png";
import cameraImg from "../../images/image-camera.png";
import { Link } from "react-router-dom";

const CourseCategoryComponent = () => {
  return (
    <div
      class="troo-da-course-categories-section"
      id="troo-da-course-categories-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="sub-tile-con">
              <div class="sub-txt">Course Categories</div>
              <h2>
                Browsw Course
                <br /> with top<span> Categories</span>
              </h2>
            </div>
          </div>
          <div class="col-md-5">
            <div class="cour-txt">
              <p>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since.
              </p>
            </div>
            <div class="vert-move">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="call-ss">
              <Link class="btn btn-lg" href="#">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={coin} alt="coin" />
                </div>
              </div>
              <h4>Economics</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={usercheck} alt="usercheck" />
                </div>
              </div>
              <h4>Managment</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={flower} alt="flower" />
                </div>
              </div>
              <h4>Sciences & Technology</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={enternainment} alt="enternainment" />
                </div>
              </div>
              <h4>Culture & Creativity</h4>
              <p>20+ Cources</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={computerdatabase} alt="computerdatabase" />
                </div>
              </div>
              <h4>Health & Medicinis</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={healthmediacal} alt="healthmediacal" />
                </div>
              </div>
              <h4>Medical</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={recording} alt="recording" />
                </div>
              </div>
              <h4>Photography</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="course-list">
              <div class="shape">
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                  <img src={cameraImg} alt="cameraImg" />
                </div>
              </div>
              <h4>Cinemagraphy</h4>
              <p>20+ Cources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategoryComponent;
