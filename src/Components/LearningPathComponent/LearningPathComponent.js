import React, { useState } from "react";
import "./LearningPathComponent.css";
import ellips from "../../images/cr-ellipse.png";
import frame from "../../images/ar-frame.png";
import dotframe from "../../images/dot-frame.png";
import sqframe from "../../images/sqframe.png";
import { Link } from "react-router-dom";
import partimg from "../../images/pathimage.png";
import { IoCloseOutline } from "react-icons/io5";

const LearningPathComponent = () => {

  const [modal, setModal] = useState(false);
  const openModal = () => {
    if (!modal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setModal(!modal);
  };

  return (
    <div
      className="troo-da-learning-path-section"
      id="troo-da-learning-path-section"
    >
      <div className="cr-ss">
        <img src={ellips} alt="ellips" />
      </div>
      <div className="circle"></div>
      <div className="arr-ss">
        <img src={frame} alt="frame" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="path-text hero-text">
              <div className="circles pulse orange"></div>
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
              <div className="dot-zik">
                <img src={dotframe} alt="dotframe" />
              </div>
              <ul>
                <li>
                  <Link to="/Home/Courses">Get Started Now</Link>
                </li>
                <li className="call-ss">
                  <Link className="btnn btn-lg" to="/Home/Contact_Us">
                    Contcat Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="zoomin">
              <img src={sqframe} alt="sqframe" />
            </div>
            <button
              type="button"
              className="vide-btn"
              onClick={openModal}
            >
              <img src={partimg} alt="partimg" />
              {
                modal?(
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          <iframe
                            className="modal__video-style"
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/pXxsZtcbKdw?start=96"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ):null
              }
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* <div className="modal-body">
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
      <div className="loader-ss">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="outerCircle"></div>
    </div>
  );
};

export default LearningPathComponent;
