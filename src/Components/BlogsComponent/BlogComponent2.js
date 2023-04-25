import React from "react";
import "./BlogComponent.css";
import fatcher from "../../images/facher-dots.png"
import { Link, createSearchParams } from "react-router-dom";
import { BlogData } from "./BlogData";



const BlogComponent2 = () => {
  return (
    <div className="troo-da-blogs-section" id="troo-da-blogs-section">
      <figure className="swing">
        <img src={fatcher} alt="fatcher" />
      </figure>
      <div className="container">
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
        <div className="row">
        {BlogData.slice(3,6).map((e, i) => (
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
        <div className="row">
        {BlogData.slice(6,9).map((e, i) => (
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

export default BlogComponent2;
