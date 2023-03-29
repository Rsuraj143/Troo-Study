import React from "react";
import "./LearningPathComponent.css";
import ellips from "../../images/cr-ellipse.png";
import frame from "../../images/ar-frame.png";
import dotframe from "../../images/dot-frame.png";
import sqframe from "../../images/sqframe.png";
import { Link } from "react-router-dom";
import partimg from "../../images/pathimage.png";

const LearningPathComponent = () => {
  return (
    <div
      class="troo-da-learning-path-section"
      id="troo-da-learning-path-section"
    >
      <div class="cr-ss">
        <img src={ellips} alt="ellips" />
      </div>
      <div class="circle"></div>
      <div class="arr-ss">
        <img src={frame} alt="frame" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="path-text hero-text">
              <div class="circles pulse orange"></div>
              <h2>
                Find the right
                <br />
                <span>learning path</span> for you
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever is it since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make
              </p>
              <div class="dot-zik">
                <img src={dotframe} alt="dotframe" />
              </div>
              <ul>
                <li>
                  <Link to="/">Get Started Now</Link>
                </li>
                <li class="call-ss">
                  <Link class="btn btn-lg" to="/">
                    Contcat Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="zoomin">
              <img src={sqframe} alt="sqframe" />
            </div>
            <button
              type="button"
              class="vide-btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src={partimg} alt="partimg" />
            </button>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* <div class="modal-body">
                  <video  controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                  </video>
                </div> */}
                </div>
              </div>
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
      <div class="outerCircle"></div>
    </div>
  );
};

export default LearningPathComponent;
