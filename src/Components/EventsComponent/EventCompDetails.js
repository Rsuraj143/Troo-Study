import React from "react";
import "./EventCompDetails.css";
import blogDetails1 from "../../images/blog-detail-1.png";
import blogdd1 from "../../images/blog-dd-1.png";
import blogdd2 from "../../images/blog-dd-2.png";
import circle from "../../images/check-circle.png";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import gest1 from "../../images/gest-1.png"
import gest2 from "../../images/gest-2.png"
import gest3 from "../../images/gest-3.png"
import cllender from "../../images/calendar-date.png"
import clock from "../../images/clock.png"
import marker from "../../images/marker-pin.png"
import user from "../../images/user.png"
import phone from "../../images/phone-call.png"
import setReading from "../../images/seat-reading-counter.png"
import personstd from "../../images/person-student.png"
import book from "../../images/book-novel.png"
import personwmn from "../../images/person-woman.png"


const EventCompDetails = () => {
  return (
    <div className="troo-da-event-detail-section" id="troo-da-event-detail-section">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <div className="over-vi">
                  <img src={blogDetails1} alt="blogDetails1" />
                </div>
                <h4>Overview</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. what is Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley is of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into is this electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letrasetis this
                  sheets containing Lorem Ipsum passages, and more recently with
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. what is Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley is of type and scrambled it to
                  make a type specimen book.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="blog-ss-img">
                  <img src={blogdd1} alt="blogdd1" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="blog-ss-img">
                  <img src={blogdd2} alt="blogdd2" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="deail-lit">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. what is Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley is of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap.
                  </p>
                  <h4>Any Test Style Here</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. what is Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley is of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into is this electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letrasetis this
                    sheets containing Lorem Ipsum passages, and more recently
                    with Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>Emergency response time is one hour</span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>We want you to pletely satisfied</span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>
                            You deserve to have your in plain English.{" "}
                          </span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>Our service philosophy </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>Emergency response time</span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>We want you to be completely </span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>
                            Your questions answered in plain English.{" "}
                          </span>
                        </li>
                        <li>
                          <img src={circle} alt="circle" />
                          <span>Our service philosophy is proactive.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. what is Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley is of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap.
                      </p>
                    </div>
                  </div>
                  <div className="row border-col">
                    <div className="col-md-12">
                      <div className="foot-socail tag-co">
                        <span>Share on</span>
                        <ul>
                          <li>
                            <Link to="/">
                              <TiSocialLinkedin />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <TbBrandInstagram />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <TiSocialTwitter />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <TiSocialFacebook />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <div className="special-guest">
                <h4>Special Guest</h4>
                <div className="gest-deals">
                  <div className="gest-img">
                    <img src={gest1} alt="gest1" />
                  </div>
                  <div className="gest-text">
                    <strong>Lana Hutson</strong>
                    <span>Ph.D. , University Berlin</span>
                  </div>
                </div>
                <div className="gest-deals">
                  <div className="gest-img">
                    <img src={gest2} alt="gest2" />
                  </div>
                  <div className="gest-text">
                    <strong>Adam Hangman</strong>
                    <span>Ph.D. , University Mumbai</span>
                  </div>
                </div>
                <div className="gest-deals">
                  <div className="gest-img">
                  <img src={gest3} alt="gest3" />
                  </div>
                  <div className="gest-text">
                    <strong>Charlote Bless</strong>
                    <span>Ph.D. , University Paris</span>
                  </div>
                </div>
              </div>
              <div className="event-informatio">
                <h4>Event Information</h4>
                <ul>
                  <li>
                    <img src={cllender} alt="cllender" />
                    <strong>Date:</strong>
                    <span> Jan 27, 2022</span>
                  </li>
                  <li>
                    <img src={clock} alt="clock"/>
                    <strong>Time:</strong>
                    <span>8:00 am - 5:00 pm</span>
                  </li>
                  <li>
                    <img src={marker} alt="marker" />
                    <strong>Venue:</strong>
                    <span> School Of Arts </span>
                  </li>
                  <li>
                    <img src={user} alt="user" />
                    <strong>Name:</strong>
                    <span> David Miz</span>
                  </li>
                  <li>
                    <img src={phone} alt="phone" />
                    <strong>Phone:</strong>
                    <span> +44 123 456 7890</span>
                  </li>
                </ul>
              </div>
              <div className="course-features">
                <h4>Related Event</h4>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={setReading} alt="setReading" />
                  </div>
                  <div className="ret-tile">
                    Machine Learning A-Z: Hands-On Python & java
                  </div>
                </div>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={personstd} alt="personstd" />
                  </div>
                  <div className="ret-tile">
                    Competitive Strategy law for all students
                  </div>
                </div>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={book} alt="book" />
                  </div> 
                  <div className="ret-tile">
                    Music Theory Learn New student & Fundamentals
                  </div>
                </div>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={personwmn} alt="personwmn" />
                  </div>
                  <div className="ret-tile">
                    Bases Matemáticas dios Álgebra Ecuacion
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

export default EventCompDetails;
