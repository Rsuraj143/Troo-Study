import React from "react";
import "./FAQComponent.css";
import Accordion from "react-bootstrap/Accordion";

const FAQComponent = () => {
  return (
    <div className="troo-da-faq-section" id="troo-da-faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-tile-con">
              <div className="sub-txt">Have a Question in Mind?</div>
              <h2>
                Frequently <span> Asked </span> Questions{" "}
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and is
                <br /> typesetting industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    01. How long is my personal free trial?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    02. What are the admissions requirements ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    03. Does Educavo offer free courses ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    04. What is the transfer application process ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    05. What is distance education ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    06. How I have to submit the required documents ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    07. Will I be charged now for a free trial ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    08. Why is collaborative learning so important ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    09. Is there a dress code at School ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="find-ans">
                <h4>Don’t Find Your Answer?</h4>
                <div className="find-text">
                  <div className="mail-cc">
                    <span>Email Us on</span>
                    <a href="mailto:troostudy@email.com">troostudy@email.com</a>
                  </div>
                  <div className="or-ss">OR</div>
                  <div className="mail-cc call-tt">
                    <span>Call Us on</span>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
