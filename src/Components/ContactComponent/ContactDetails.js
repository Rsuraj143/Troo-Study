import React from "react";
import "./ContactDetails.css";
import map from "../../images/map.png";
import callIcon from "../../images/call-icon.png";
import mail from "../../images/mail-icon.png";

const ContactDetails = () => {
  return (
    <>
      <div className="troo-da-contact-section" id="troo-da-contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="con-add-col">
                <h4>We Want to Here From You.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="conadd-ss">
                  <div className="conimg">
                    <img src={map} alt="map" />
                  </div>
                  <div className="con-text">
                    <strong>Address</strong>
                    <p>32 Park Row, Edinburgh United Kingdom, EH2 1TT</p>
                  </div>
                </div>
                <div className="conadd-ss">
                  <div className="conimg">
                    <img src={callIcon} alt="callIcon" />
                  </div>
                  <div className="con-text">
                    <strong>Call Us on</strong>
                    <p>
                      +44 123 456 7890
                      <br />
                      +44 987 654 3210
                    </p>
                  </div>
                </div>
                <div className="conadd-ss">
                  <div className="conimg">
                    <img src={mail} alt="mail" />
                  </div>
                  <div className="con-text">
                    <strong>Email Us on</strong>
                    <p>
                      registrar@troostudy.edu.com
                      <br />
                      contact@troostudy.edu.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="fome-section">
                <div className="con-form-tile">
                  <h4>Send Us Message</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <form className="row g-3">
                  <div className="col-md-12">
                    <div className="field">
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
                  </div>
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
      <div className="troo-da-map-section" id="troo-da-map-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-section">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8850349918985!2d72.49642611542339!3d23.027993021903114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e046fa5%3A0xd837def63555f791!2sTRooInbound%20Private%20Limited!5e0!3m2!1sen!2sin!4v1675143868509!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="gmap"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
