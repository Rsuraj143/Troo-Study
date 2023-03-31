import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetailsComponent.css";
import seatReading from "../../images/seat-reading-counter.png";
import personStd from "../../images/person-student.png";
import book from "../../images/book-novel.png";
import personWomen from "../../images/person-woman.png";
import circle from "../../images/check-circle.png";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import block2 from "../../images/blog-dd-2.png";
import block1 from "../../images/blog-dd-1.png";
import blogdetails from "../../images/blog-detail-1.png";
import courseImg from "../../images/cours-image.png";

const BlogDetailsComponent = () => {
  return (
    <div
      class="troo-da-cources-detail-section"
      id="troo-da-cources-detail-section"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="cources-call-desls">
              <div class="row">
                <div class="col-md-4">
                  <div class="instructor-col">
                    <div class="ins-cr">
                      <img src={courseImg} alt="courseImg" />
                    </div>
                    <div class="ins-de">
                      <span>instructor</span>
                      <strong>Serena Deen</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="instructor-col">
                    <div class="ins-de">
                      <span>Category</span>
                      <strong>Managment</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="instructor-col">
                    <div class="ins-de">
                      <span>Date</span>
                      <strong>22 Sep, 2022</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="over-vi">
                  <img src={blogdetails} alt="blogdetails" />
                </div>
                <h4>Essential High School Reads From the Last Decade</h4>
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
            <div class="row">
              <div class="col-md-6">
                <div class="blog-ss-img">
                  <img src={block1} alt="block1" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="blog-ss-img">
                  <img src={block2} alt="block2" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="deail-lit">
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
                  <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
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
                  <div class="row">
                    <div class="col-md-12">
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
                  <div class="row border-col">
                    <div class="col-md-8">
                      <div class="tag-ss">
                        <strong>Tags:</strong>
                        <span>
                          Education, Study, Students, Career, Business,
                          Learning, Reacher
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="foot-socail tag-co">
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
                  <div class="row">
                    <div class="col-md-12">
                      <div class="commet-form">
                        <h4>0 Comments</h4>
                        <div class="fome-section">
                          <form class="row g-3">
                            <div class="col-md-12">
                              <div class="field">
                                <input
                                  type="name"
                                  class="form-control"
                                  id="inputName"
                                />
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
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="sidebar">
              <div class="course-features">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <strong>Business : </strong>
                    <span>5</span>
                  </li>
                  <li>
                    <strong>Finance : </strong>
                    <span> 3</span>
                  </li>
                  <li>
                    <strong>Medical: </strong> <span>3 </span>
                  </li>
                  <li>
                    <strong>Managment: </strong> <span> 7</span>
                  </li>
                  <li>
                    <strong>Music: </strong>
                    <span>2 </span>
                  </li>
                  <li>
                    <strong>Economics: </strong>
                    <span>4 </span>
                  </li>
                  <li>
                    <strong>Technology: </strong>
                    <span>1 </span>
                  </li>
                  <li>
                    <strong>Philography: </strong>
                    <span>1 </span>
                  </li>
                  <li>
                    <strong>Electrical: </strong>
                    <span>1 </span>
                  </li>
                </ul>
              </div>
              <div class="course-features tag-ss">
                <h4>Tags </h4>
                <ul>
                  <li>
                    <Link href="#">Eucation</Link>
                  </li>
                  <li>
                    <Link href="#">Course</Link>
                  </li>
                  <li>
                    <Link href="#">Study</Link>
                  </li>
                  <li>
                    <Link href="#">Psychological</Link>
                  </li>
                  <li>
                    <Link href="#">Coaching</Link>
                  </li>
                  <li>
                    <Link href="#">Lifeguide</Link>
                  </li>
                  <li>
                    <Link href="#">Students</Link>
                  </li>
                  <li>
                    <Link href="#">App</Link>
                  </li>
                </ul>
              </div>
              <div class="course-features">
                <h4>Related Blogs </h4>
                <div class="resent-courcse">
                  <div class="ret-img">
                    <img src={seatReading} alt="seatReading" />
                  </div>
                  <div class="ret-tile">
                    Machine Learning A-Z: Hands-On Python & java
                  </div>
                </div>
                <div class="resent-courcse">
                  <div class="ret-img">
                    <img src={personStd} alt="personStd" />
                  </div>
                  <div class="ret-tile">
                    Competitive Strategy law for all students
                  </div>
                </div>
                <div class="resent-courcse">
                  <div class="ret-img">
                    <img src={book} alt="book" />
                  </div>
                  <div class="ret-tile">
                    Music Theory Learn New student & Fundamentals
                  </div>
                </div>
                <div class="resent-courcse">
                  <div class="ret-img">
                    <img src={personWomen} alt="personWomen" />
                  </div>
                  <div class="ret-tile">
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

export default BlogDetailsComponent;
