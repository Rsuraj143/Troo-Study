import React from "react";
import "./FetureComponent.css";
import facher from "../../images/facher-dots.png";
import { Link, createSearchParams } from "react-router-dom";
import { CourseData } from "./CourseData";


const FetureComponent = () => {
  return (
    <div className="troo-da-feature-section" id="troo-da-feature-section">
      <figure className="swing">
        <img src={facher} alt="facher" />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-tile-con">
              <div className="sub-txt">Feature Courses</div>
              <h2>
                Choose a Course to <br />
                <span> Get Started</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {CourseData.slice(0, 3).map((item, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Courses/Course_Details?${createSearchParams({id : item.id})}`}>
              <div className="feature-sec">
                <div className="feac-img">
                  <img src={item.courseImg} alt="feture1" />
                  <span>{item.price}</span>
                </div>
                <div className="feat-text">
                  <p>{item.courseType}</p>
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  <h4>{item.courseTitle}</h4>
                  <div className="client-col">
                    <div className="cli-img">
                      <img src={item.authorImg} alt="client1" />
                    </div>
                    <div className="cli-text">
                      {item.authorTitle}
                      <br /> {item.authodName}
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        
        </div>
        <div className="row">
        {CourseData.slice(3,5).map((item, i) => (
            <div className="col-md-4">
              <Link to={`/Home/Courses/Course_Details?${createSearchParams({id : item.id})}`}>
              <div className="feature-sec">
                <div className="feac-img">
                  <img src={item.courseImg} alt="feture1" />
                  <span>{item.price}</span>
                </div>
                <div className="feat-text">
                  <p>{item.courseType}</p>
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}

                  <h4>{item.courseTitle}</h4>
                  <div className="client-col">
                    <div className="cli-img">
                      <img src={item.authorImg} alt="client1" />
                    </div>
                    <div className="cli-text">
                      {item.authorTitle}
                      <br /> {item.authodName}
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
          <div className="col-md-4">
            <div className="more-course">
              <h4>5 More Cources</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and it also it
                typesetting industry.
              </p>
              <div className="call-ss">
                <Link className="btnn btn-lg" to="/Home/Courses">
                  View All Courses
                </Link>
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
      </div>
    </div>
  );
};

export default FetureComponent;
