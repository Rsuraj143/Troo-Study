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
    <div className="troo-da-hero-section" id="troo-da-hero-section">
      <div className="wave-img">
        <img src={zikzak} alt="zikzak" />
      </div>
      <div className="spinner-wrap">
        <div className="spinner-item"></div>
        <div className="spinner-item spinner-item--2"></div>
        <div className="spinner-item spinner-item--3"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="hero-text">
            <div className="vert-move">
              <img src={bgdot} alt="bgdot" />
            </div>
            <div className="left-img-col">
              <div className="vert-move">
                <img src={dot_specing} alt="dot_specing" />
              </div>
              <div className="mercury"></div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sub-page-title">
              <ul className="breadcrumb">
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
