import React from "react";
import "./BlogComponent.css";
import fatcherdot from "../../images/facher-dots.png";
import arrow from "../../images/arrow.png";
import { Link, createSearchParams } from "react-router-dom";
import { BlogData } from "./BlogData";

const BlogComponent = () => {
  return (
    <div className="troo-da-blogs-section" id="troo-da-blogs-section">
      <figure className="swing">
        <img src={fatcherdot} alt="fatcherdot" />
      </figure>
      <div className="half-cricle">
        <div className="c9 c"></div>
        <div className="c8 c"></div>
      </div>
      <div className="container">
      
          <div className="row bloghead">
            <div className="col-md-5">
              <div className="sub-tile-con">
                <div className="sub-txt">News And Blogs</div>
                <h2>
                  Read Our Latest <span> Blogs & News </span>
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cour-txt">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and is
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>
              <div className="vert-move">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="call-ss">
                <Link className="btnn btn-lg" to="/Home/Blogs">
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
       
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div className="col-md-4">
             <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
             <div className="feature-sec">
                <div className="feac-img">
                  <img src={e.img} alt="blog1" />
                  <span>
                    {e.date}
                    <br />
                    {e.year}
                  </span>
                </div>
                <div className="feat-text">
                  <h4>{e.title}</h4>
                  <div className="client-col">
                    <div className="cli-img">
                      <img src={e.clientImg} alt="clientblog" />
                    </div>
                    <div className="cli-text">{e.desg} </div>
                  </div>
                  <div className="read-cta">
                    <Link href="#">
                      Read More <img src={e.arrow} alt="arroeNerrowRignt" />
                    </Link>
                  </div>
                </div>
              </div>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
