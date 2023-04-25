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
      className="troo-da-course-categories-section"
      id="troo-da-course-categories-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="sub-tile-con">
              <div className="sub-txt">Course Categories</div>
              <h2>
                Browsw Course
                <br /> with top<span> Categories</span>
              </h2>
            </div>
          </div>
          <div className="col-md-5">
            <div className="cour-txt">
              <p>
                Lorem Ipsum is simply dummy text of the printing and is
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since.
              </p>
            </div>
            <div className="vert-move">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="call-ss">
              <Link className="btnn btn-lg" to="/Home/Courses">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={coin} alt="coin" />
                </div>
              </div>
              <h4>Economics</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={usercheck} alt="usercheck" />
                </div>
              </div>
              <h4>Managment</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={flower} alt="flower" />
                </div>
              </div>
              <h4>Sciences & Technology</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={enternainment} alt="enternainment" />
                </div>
              </div>
              <h4>Culture & Creativity</h4>
              <p>20+ Cources</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={computerdatabase} alt="computerdatabase" />
                </div>
              </div>
              <h4>Health & Medicinis</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={healthmediacal} alt="healthmediacal" />
                </div>
              </div>
              <h4>Medical</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img src={recording} alt="recording" />
                </div>
              </div>
              <h4>Photography</h4>
              <p>20+ Cources</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-list">
              <div className="shape">
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
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
