import React from "react";
import "./FetureComponent.css";
import facher from "../../images/facher-dots.png";
import { Link } from "react-router-dom";
import { CourseData } from "./CourseData";


const FetureComponent = () => {
  return (
    <div class="troo-da-feature-section" id="troo-da-feature-section">
      <figure class="swing">
        <img src={facher} alt="facher" />
      </figure>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-tile-con">
              <div class="sub-txt">Feature Courses</div>
              <h2>
                Choose a Course to <br />
                <span> Get Started</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {CourseData.slice(0, 3).map((item, i) => (
            <div class="col-md-4">
              <div class="feature-sec">
                <div class="feac-img">
                  <img src={item.courseImg} alt="feture1" />
                  <span>{item.price}</span>
                </div>
                <div class="feat-text">
                  <p>{item.courseType}</p>
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  <h4>{item.courseTitle}</h4>
                  <div class="client-col">
                    <div class="cli-img">
                      <img src={item.authorImg} alt="client1" />
                    </div>
                    <div class="cli-text">
                      {item.authorTitle}
                      <br /> {item.authodName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
        </div>
        <div class="row">
        {CourseData.slice(3,5).map((item, i) => (
            <div class="col-md-4">
              <div class="feature-sec">
                <div class="feac-img">
                  <img src={item.courseImg} alt="feture1" />
                  <span>{item.price}</span>
                </div>
                <div class="feat-text">
                  <p>{item.courseType}</p>
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}
                  {item.rating}

                  <h4>{item.courseTitle}</h4>
                  <div class="client-col">
                    <div class="cli-img">
                      <img src={item.authorImg} alt="client1" />
                    </div>
                    <div class="cli-text">
                      {item.authorTitle}
                      <br /> {item.authodName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div class="col-md-4">
            <div class="more-course">
              <h4>5 More Cources</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and it also it
                typesetting industry.
              </p>
              <div class="call-ss">
                <Link class="btnn btn-lg" to="/Home/Cources_Grid">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="loader-ss">
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
