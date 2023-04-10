import React from "react";
import "./ContactComponent.css";
import blueArrow from "../../images/blu-arrow.png";
import getImg from "../../images/get-img.png";

const ContactComponent = () => {
  return (
    <div className="troo-da-get-in-touch-section" id="troo-da-get-in-touch-section">
      <div className="arrow-icon">
        <img src={blueArrow} alt="blueArrow" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="get-in-touch-img">
              <img src={getImg} alt="getImg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="sub-tile-con">
              <div className="sub-txt">Get in Touch</div>
              <h2>
                Leave Your Contact Detail and <br />
                We’ll <span> Get in Touch </span> with You.
              </h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and is
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since.
            </p>
          </div>
          <div className="col-md-6">
            <div className="fome-section">
              <div className="fomr-tile">Contact Form</div>
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your Name"
                    />
                    <label for="floatingInput">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Your Phone"
                      />
                      <label for="floatingInput">Your Phone</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Your Email"
                      />
                      <label for="floatingInput">Your Email</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="field">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Subject"
                      />
                      <label for="floatingInput">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="field">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Whrite something"
                      />
                      <label for="floatingInput">Whrite something</label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btnn btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
