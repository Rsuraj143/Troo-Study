import React, { useEffect, useState } from "react";
import "./HeroGlobal.css";
import zikzak from "../../images/zik-zak-line.png";
import bgdot from "../../images/bg-dots.png";
import dot_specing from "../../images/dot-spcing.png";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "../Header/NavData";

const HeroGlobal = () => {
  const location = useLocation();
  const [heading, setHeading] = useState();
  console.log(location);
  let pathName = location.pathname;

  useEffect(() => {
    const data = NavData.find((d) => {
      if (d?.subNav) {
        const subTitle = d?.subNav?.find((s) => s.path === pathName);
        if (subTitle) {
          // setHeading(subTitle.heading);
          return d;
        }
      } else if (d.path === pathName) {
        // setHeading(d.title)
        return d;
      }
    });

    if (data?.subNav) {
      const obj = data?.subNav.find((s) => s.path === pathName);
      setHeading(obj.heading);
    } else {
      setHeading(data.title);
    }
  }, []);

  return (
    <div class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="wave-img">
        <img src={zikzak} alt="zikzak" />
      </div>
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="hero-text">
            <div class="vert-move">
              <img src={bgdot} alt="bgdot" />
            </div>
            <div class="left-img-col">
              <div class="vert-move">
                <img src={dot_specing} alt="dot_specing" />
              </div>
              <div class="mercury"></div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="sub-page-title">
              <ul class="breadcrumb">
                <li>
                  <Link to="">
                    {pathName.slice(1).replace(/_/g, " ").replace(/\//g, "\xa0 / \xa0")}
                  </Link>
                </li>
              </ul>
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGlobal;
