import React from "react";
import "./FetureComponent.css";
import facher from "../../images/facher-dots.png";
import { CourseData } from "./CourseData";
import { Link } from "react-router-dom";

const FetureComponent2 = () => {
  return (
    <div className="troo-da-feature-section" id="troo-da-feature-section">
      <figure className="swing">
        <img src={facher} alt="facher" />
      </figure>
      <div className="container">
        <div className="row">
          {CourseData.slice(0, 3).map((item, i) => (
            <div className="col-md-4">
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
            </div>
          ))}
        </div>
        <div className="row">
          {CourseData.slice(3, 6).map((item, i) => (
            <div className="col-md-4">
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
            </div>
          ))}
        </div>
        <div className="row">
          {CourseData.slice(6, 9).map((item, i) => (
            <div className="col-md-4">
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
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="call-ss">
              <Link className="btnn btn-lg" href="#">
                View All Courses
              </Link>
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

export default FetureComponent2;
