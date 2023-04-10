import React from "react";
import "./CourseDetailsComponent.css";
import { Link } from "react-router-dom";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import courseImg from "../../images/cours-image.png";
import clientimg from "../../images/clienimage.png";
import womenmodel from "../../images/women-model.png";
import Accordion from "react-bootstrap/Accordion";
import shareIcon from "../../images/share-icon.png"
import seatReading from "../../images/seat-reading-counter.png"
import personStudent from "../../images/person-student.png"
import personWomen from "../../images/person-woman.png"
import book from "../../images/book-novel.png"

const CourseDetailsComponent = () => {
  return (
    <div
      className="troo-da-cources-detail-section"
      id="troo-da-cources-detail-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="cources-call-desls">
              <div className="row">
                <div className="col-md-3">
                  <div className="instructor-col">
                    <div className="ins-cr">
                      <img src={courseImg} alt="courseImg" />
                    </div>
                    <div className="ins-de">
                      <span>instructor</span>
                      <strong>Serena Deen</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="instructor-col">
                    <div className="ins-cr">
                      <img src={clientimg} alt="clientimg" />
                    </div>
                    <div className="ins-de">
                      <span>Category</span>
                      <strong>Managment</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="instructor-col">
                    <div className="ins-de">
                      <span>Rating</span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="instructor-col">
                    <div className="ins-de">
                      <span>Call Us on</span>
                      <strong>
                        <Link href="#">+44 123 456 7890</Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="over-vi">
                  <img src={womenmodel} alt="womenmodel" />
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
                <h4>Curriculum</h4>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>01. Getting started</Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry's standard
                      dummy text ever since.simply dummy text of the printing
                      and typesetting.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>02. Lesson 2</Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry's standard
                      dummy text ever since.simply dummy text of the printing
                      and typesetting.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>03. Lesson 2</Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry's standard
                      dummy text ever since.simply dummy text of the printing
                      and typesetting.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                

                <h4>Instructor</h4>
                <div className="instructor-section">
                  <div className="instructor-col">
                    <div className="ins-cr">
                      <img src={courseImg} alt="courseImg" />
                    </div>
                    <div className="ins-de">
                      <span>instructor</span>
                      <strong>Serena Deen</strong>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. what is Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley this is of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <div className="foot-socail">
                    <span>Social Media</span>
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
          <div className="col-md-3">
            <div className="sidebar ">
              <div className="course-features">
                <h4>Course features:</h4>
                <ul>
                  <li>
                    <strong>Duration : </strong>
                    <span>2 weeks</span>
                  </li>
                  <li>
                    <strong>Max Retakes : </strong>
                    <span> 3 Retakes</span>
                  </li>
                  <li>
                    <strong>Pass Percentage : </strong> <span>90% </span>
                  </li>
                  <li>
                    <strong>Total Lessons: </strong> <span> 6 Lessons </span>
                  </li>
                  <li>
                    <strong>Quizzes: </strong>
                    <span>2 Quizzes </span>
                  </li>
                </ul>
                <div className="call-ss">
                  <Link className="btnn btn-lg" href="#">
                    <img src={shareIcon} alt="shareIcon" /> Share This Course
                  </Link>
                </div>
              </div>
              <div className="course-features">
                <h4>Also You May Like </h4>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={seatReading} alt="seatReading" />
                  </div>
                  <div className="ret-tile">
                    Machine Learning A-Z: Hands-On Python & java
                  </div>
                </div>
                <div className="resent-courcse">
                  <div className="ret-img">
                    <img src={personStudent} alt="personStudent" />
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
                    <img src={personWomen} alt="personWomen" />
                  </div>
                  <div className="ret-tile">
                    Bases Matemáticas dios Álgebra Ecuacion
                  </div>
                </div>
                <div className="call-ss">
                  <Link className="btnn btn-lg" href="#">
                    View All Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
