import React from "react";
import "./FetureComponent.css";
import facher from "../../images/facher-dots.png";
import { CourseData } from "./CourseData";
import { Link } from "react-router-dom";

const FetureComponent2 = () => {
  return (
    <div class="troo-da-feature-section" id="troo-da-feature-section">
      <figure class="swing">
        <img src={facher} alt="facher" />
      </figure>
      <div class="container">
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
          {CourseData.slice(3, 6).map((item, i) => (
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
          {CourseData.slice(6, 9).map((item, i) => (
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
          <div class="col-md-12">
            <div class="call-ss">
              <Link class="btnn btn-lg" href="#">
                View All Courses
              </Link>
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

export default FetureComponent2;
