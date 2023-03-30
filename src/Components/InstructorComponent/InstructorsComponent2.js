import React from "react";
import "./InstructureComponent.css";
import { InstructrsData } from "./InstructorsData";
import { Link } from "react-router-dom";

const InstructorsComponent2 = () => {
  return (
    <div class="troo-da-team-section" id="troo-da-team-section">
      <div class="container">
        {/* <div class="row">
          <div class="col-md-12">
            <div class="sub-tile-con">
              <div class="sub-txt">Our Instructor</div>
              <h2>
                Troostudy’s <span>Best Instructor</span>
              </h2>
            </div>
          </div>
        </div> */}
        <div class="row">
          {InstructrsData.slice(0, 3).map((item, i) => (
            <div class="col-md-4">
              <div class="instructor">
                <div class="ins-img">
                  <img src={item.img} alt="team1" />
                </div>
                <div class="ins-txt">
                  <h4>{item.name}</h4>
                  <p>{item.title} </p>
                </div>
                <div class="team-deatils">
                  <p>{item.media} </p>
                  <ul>
                    {item.social.map((e, i) => (
                      <li key={i}>
                        <Link to={e.path}>
                          <div>{e.icon}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {InstructrsData.slice(3, 6).map((item, i) => (
            <div class="col-md-4">
              <div class="instructor">
                <div class="ins-img">
                  <img src={item.img} alt="team1" />
                </div>
                <div class="ins-txt">
                  <h4>{item.name}</h4>
                  <p>{item.title} </p>
                </div>
                <div class="team-deatils">
                  <p>{item.media} </p>
                  <ul>
                    {item.social.map((e, i) => (
                      <li key={i}>
                        <Link to={e.path}>
                          <div>{e.icon}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {InstructrsData.slice(6,9).map((item, i) => (
            <div class="col-md-4">
              <div class="instructor">
                <div class="ins-img">
                  <img src={item.img} alt="team1" />
                </div>
                <div class="ins-txt">
                  <h4>{item.name}</h4>
                  <p>{item.title} </p>
                </div>
                <div class="team-deatils">
                  <p>{item.media} </p>
                  <ul>
                    {item.social.map((e, i) => (
                      <li key={i}>
                        <Link to={e.path}>
                          <div>{e.icon}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {InstructrsData.slice(9,12).map((item, i) => (
            <div class="col-md-4">
              <div class="instructor">
                <div class="ins-img">
                  <img src={item.img} alt="team1" />
                </div>
                <div class="ins-txt">
                  <h4>{item.name}</h4>
                  <p>{item.title} </p>
                </div>
                <div class="team-deatils">
                  <p>{item.media} </p>
                  <ul>
                    {item.social.map((e, i) => (
                      <li key={i}>
                        <Link to={e.path}>
                          <div>{e.icon}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {InstructrsData.slice(12,15).map((item, i) => (
            <div class="col-md-4">
              <div class="instructor">
                <div class="ins-img">
                  <img src={item.img} alt="team1" />
                </div>
                <div class="ins-txt">
                  <h4>{item.name}</h4>
                  <p>{item.title} </p>
                </div>
                <div class="team-deatils">
                  <p>{item.media} </p>
                  <ul>
                    {item.social.map((e, i) => (
                      <li key={i}>
                        <Link to={e.path}>
                          <div>{e.icon}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div class="row">
          <div class="col-md-12">
            <div class="call-ss">
              <Link class="btnn btn-lg" href="#">
                View All Instuctor
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InstructorsComponent2;
