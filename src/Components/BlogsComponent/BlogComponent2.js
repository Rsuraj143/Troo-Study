import React from "react";
import "./BlogComponent.css";
import fatcher from "../../images/facher-dots.png"
import { Link } from "react-router-dom";
import { BlogData } from "./BlogData";



const BlogComponent2 = () => {
  return (
    <div class="troo-da-blogs-section" id="troo-da-blogs-section">
      <figure class="swing">
        <img src={fatcher} alt="fatcher" />
      </figure>
      <div class="container">
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
        <div class="row">
        {BlogData.slice(3,6).map((e, i) => (
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
        <div class="row">
        {BlogData.slice(6,9).map((e, i) => (
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

export default BlogComponent2;
