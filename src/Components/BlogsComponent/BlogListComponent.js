import React from "react";
import { Link } from "react-router-dom";
import "./BlogListComponent.css";
import blogList1 from "../../images/blog-list-1.png"
import blogClient from "../../images/blog-client.png"
import arrowRight from "../../images/arrow-narrow-right.png"
import blogList2 from "../../images/blog-list-2.png"
import blogList3 from "../../images/blog-list-3.png"
import blogList4 from "../../images/blog-list-4.png"
import seatReading from "../../images/seat-reading-counter.png"
import personStd from "../../images/person-student.png"
import book from "../../images/book-novel.png"
import personWomen from "../../images/person-woman.png"


const BlogListComponent = () => {
  return (
    <div class="troo-da-blogs-section" id="troo-da-blogs-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
    
                  <div class="feature-sec">
                    <div class="feac-img">
                      <img src={blogList1} alt="blogList1" />
                      <span>
                        22 Sep
                        <br />
                        2022
                      </span>
                    </div>
                    <div class="feat-text">
                      <h4>
                        25 Essential High School Reads From the Last Decade
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets.
                      </p>
                      <div class="client-col">
                        <div class="cli-img">
                          <img src={blogClient} alt="blogClient" />
                        </div>
                        <div class="cli-text">By.Admin</div>
                      </div>
                      <div class="read-cta">
                        <Link href="#">
                          Read More <img src={arrowRight} alt="arrowRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
            
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                  <div class="feature-sec">
                    <div class="feac-img">
                      <img src={blogList2} alt="blogList2" />
                      <span>
                        22 Sep
                        <br />
                        2022
                      </span>
                    </div>
                    <div class="feat-text">
                      <h4>
                        Sleepless with AI: My First AI Poetry and 7 Thoughts
                        about #AI
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets.
                      </p>
                      <div class="client-col">
                        <div class="cli-img">
                          <img src={blogClient} alt="blogClient" />
                        </div>
                        <div class="cli-text">By.Admin</div>
                      </div>
                      <div class="read-cta">
                      <Link href="#">
                          Read More <img src={arrowRight} alt="arrowRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                  <div class="feature-sec">
                    <div class="feac-img">
                      <img src={blogList3} alt="blogList3" />
                      <span>
                        22 Sep
                        <br />
                        2022
                      </span>
                    </div>
                    <div class="feat-text">
                      <h4>
                        ISTE Day 0 Recap for my #NotatISTE #ISTELive Learning
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets.
                      </p>
                      <div class="client-col">
                        <div class="cli-img">
                        <img src={blogClient} alt="blogClient" />
                        </div>
                        <div class="cli-text">By.Admin</div>
                      </div>
                      <div class="read-cta">
                      <Link href="#">
                          Read More <img src={arrowRight} alt="arrowRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                  <div class="feature-sec">
                    <div class="feac-img">
                      <img src={blogList4} alt="blogList4" />
                      <span>
                        22 Sep
                        <br />
                        2022
                      </span>
                    </div>
                    <div class="feat-text">
                      <h4>6 Sustainable Self-Care Tips for Teachers</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets.
                      </p>
                      <div class="client-col">
                        <div class="cli-img">
                        <img src={blogClient} alt="blogClient" />
                        </div>
                        <div class="cli-text">By.Admin</div>
                      </div>
                      <div class="read-cta">
                      <Link href="#">
                          Read More <img src={arrowRight} alt="arrowRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
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

export default BlogListComponent;
