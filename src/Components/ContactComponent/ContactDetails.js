import React from "react";
import "./ContactDetails.css";
import map from "../../images/map.png";
import callIcon from "../../images/call-icon.png";
import mail from "../../images/mail-icon.png";

const ContactDetails = () => {
  return (
    <>
      <div class="troo-da-contact-section" id="troo-da-contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="con-add-col">
                <h4>We Want to Here From You.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="conadd-ss">
                  <div class="conimg">
                    <img src={map} alt="map" />
                  </div>
                  <div class="con-text">
                    <strong>Address</strong>
                    <p>32 Park Row, Edinburgh United Kingdom, EH2 1TT</p>
                  </div>
                </div>
                <div class="conadd-ss">
                  <div class="conimg">
                    <img src={callIcon} alt="callIcon" />
                  </div>
                  <div class="con-text">
                    <strong>Call Us on</strong>
                    <p>
                      +44 123 456 7890
                      <br />
                      +44 987 654 3210
                    </p>
                  </div>
                </div>
                <div class="conadd-ss">
                  <div class="conimg">
                    <img src={mail} alt="mail" />
                  </div>
                  <div class="con-text">
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
            <div class="col-md-7">
              <div class="fome-section">
                <div class="con-form-tile">
                  <h4>Send Us Message</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <form class="row g-3">
                  <div class="col-md-12">
                    <div class="field">
                      <input type="name" class="form-control" id="inputName" />
                      <label for="inputName" class="form-label">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <input
                        type="phone"
                        class="form-control"
                        id="inputPhone"
                      />
                      <label for="inputPhone" class="form-label">
                        Your Phone
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                      />
                      <label for="inputEmail" class="form-label">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <input
                        type="subject"
                        class="form-control"
                        id="inputsubject"
                      />
                      <label for="inputSubject" class="form-label">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="field">
                      <input
                        type="Whrite"
                        class="form-control"
                        id="inputWhrite"
                      />
                      <label for="inputWhrite" class="form-label">
                        Whrite something
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btnn btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="troo-da-map-section" id="troo-da-map-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="map-section">
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
