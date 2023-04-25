import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import "./BlogListComponent.css";
import seatReading from "../../images/seat-reading-counter.png"
import personStd from "../../images/person-student.png"
import book from "../../images/book-novel.png"
import personWomen from "../../images/person-woman.png"
import { BlogData } from "./BlogData";


const BlogListComponent = () => {
  return (
    <div className="troo-da-blogs-section" id="troo-da-blogs-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {
              BlogData.slice(0,4).map((e,i)=>
              <div className="row">
              <div className="col-md-12">
                  <div className="feature-sec">
                    <div className="feac-img">
                      <img src={e.img2} alt="blogList1" />
                      <span>
                        {e.date}
                        <br />
                        {e.year}
                      </span>
                    </div>
                    <div className="feat-text">
                      <h4>
                        {e.title}
                      </h4>
                      <p>
                        {e.para}
                      </p>
                      <div className="client-col">
                        <div className="cli-img">
                          <img src={e.clientImg} alt="blogClient" />
                        </div>
                        <div className="cli-text">{e.desg} </div>
                      </div>
                      <div className="read-cta">
                        <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                          Read More <img src={e.arrow} alt="arrowRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
              )
            }
          </div>

          <div className="col-md-4">
            <div className="sidebar">
              <div className="course-features">
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
              <div className="course-features tag-ss">
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
              <div className="course-features">
                <h4>Related Blogs </h4>
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
                    <img src={personStd} alt="personStd" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListComponent;
