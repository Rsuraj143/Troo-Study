import React from "react";
import "./BlogComponent.css";
import fatcherdot from "../../images/facher-dots.png";
import arrow from "../../images/arrow.png";
import { Link } from "react-router-dom";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <div class="troo-da-blogs-section" id="troo-da-blogs-section">
      <figure class="swing">
        <img src={fatcherdot} alt="fatcherdot" />
      </figure>
      <div class="half-cricle">
        <div class="c9 c"></div>
        <div class="c8 c"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-md-5">
              <div class="sub-tile-con">
                <div class="sub-txt">News And Blogs</div>
                <h2>
                  Read Our Latest <span> Blogs & News </span>
                </h2>
              </div>
            </div>
            <div class="col-md-4">
              <div class="cour-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and is
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
              <div class="vert-move">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="call-ss">
                <Link class="btnn btn-lg" to="#">
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <div class="feature-sec">
                <div class="feac-img">
                  <img src={e.img} alt="blog1" />
                  <span>
                    {e.date}
                    <br />
                    {e.year}
                  </span>
                </div>
                <div class="feat-text">
                  <h4>{e.title}</h4>
                  <div class="client-col">
                    <div class="cli-img">
                      <img src={e.clientImg} alt="clientblog" />
                    </div>
                    <div class="cli-text">{e.desg} </div>
                  </div>
                  <div class="read-cta">
                    <Link href="#">
                      Read More <img src={e.arrow} alt="arroeNerrowRignt" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
