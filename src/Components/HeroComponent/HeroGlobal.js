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
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  console.log(location);
  let pathName = location.pathname;

  useEffect(() => {
    const data = NavData.find((d) => {
      if (d?.subNav) {
        const subTitle = d?.subNav?.find((s) => s.path === pathName);
        if (subTitle) {
          return d;
        }
      } else if (d.path === pathName) {
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

  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    console.log(breadcrumbs);
    setBreadcrumbs(breadcrumbs);
  }, [location]);

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
             
              {breadcrumbs.map((breadcrumb, index) => (
                    <li className={`breadcrumb-item${index === breadcrumbs.length - 1 ? ' current' : ''}`}>
                    <Link key={index} to={breadcrumb.path}>
                      {breadcrumb.title.replace(/_/g, " ")}
                    </Link>
                  </li>
                  ))}
           
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
