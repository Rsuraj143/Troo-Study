import React from "react";
import "./BlogComponent.css";
import fatcherdot from "../../images/facher-dots.png";
import arrow from "../../images/arrow.png"
import { Link } from "react-router-dom";
import blog1 from "../../images/blog-1.png"
import clientblog from "../../images/blog-client.png"
import arroeNerrowRignt from "../../images/arrow-narrow-right.png"
import blog2 from "../../images/blog-2.png"
import blogClient2 from "../../images/blog-client-2.png"
import blog3 from "../../images/blog-3.png"
import blogClient3 from "../../images/blog-client-3.png"


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
                  Read Our Latest <span>   Blogs & News </span>
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
                <img src={arrow} alt="arrow"/>
              </div>
            </div>
            <div class="col-md-3">
              <div class="call-ss">
                <Link class="btn btn-lg" to="#">
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={blog1} alt="blog1" />
                <span>
                  22 Sep
                  <br />
                  2022
                </span>
              </div>
              <div class="feat-text">
                <h4>25 Essential High School Reads From the Last Decade</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={clientblog} alt="clientblog" />
                  </div>
                  <div class="cli-text">By.Admin</div>
                </div>
                <div class="read-cta">
                  <Link href="#">
                    Read More <img src={arroeNerrowRignt} alt="arroeNerrowRignt" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={blog2} alt="blog2" />
                <span>
                  22 Sep
                  <br />
                  2022
                </span>
              </div>
              <div class="feat-text">
                <h4>Having Students Learn by Teaching</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={blogClient2} alt="blogClient2" />
                  </div>
                  <div class="cli-text">By.Admin</div>
                </div>
                <div class="read-cta">
                  <Link href="#">
                    Read More <img src={arroeNerrowRignt} alt="arroeNerrowRignt" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-sec">
              <div class="feac-img">
                <img src={blog3} alt="blog3" />
                <span>
                  22 Sep
                  <br />
                  2022
                </span>
              </div>
              <div class="feat-text">
                <h4>25 Essential High School Reads From the Last Decade</h4>
                <div class="client-col">
                  <div class="cli-img">
                    <img src={blogClient3} alt="blogClient3" />
                  </div>
                  <div class="cli-text">By.Admin</div>
                </div>
                <div class="read-cta">
                  <Link href="#">
                    Read More <img src={arroeNerrowRignt} alt="arroeNerrowRignt" />
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

export default BlogComponent;
