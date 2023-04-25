import React from "react";
import "./EventComponent.css";
import { EventData } from "./EventData";
import { Link, createSearchParams } from "react-router-dom";

const EventComponent = () => {
  return (
    <div className="troo-da-event-section" id="troo-da-event-section">
      <div className="container">
        <div className="row">
          {EventData.slice(0, 3).map((e, i) => (
            <div className="col-md-4">
              <Link
                to={`/Home/Events/Event_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="event-col">
                  <div className="event-img">
                    <img src={e.img} alt="event1" />
                  </div>
                  <div className="event-text">
                    <div className="eve-txt">
                      <span>{e.title}</span>
                    </div>
                    <div className="eve-img">
                      <img
                        className="normal-img"
                        src={e.arrowbtn}
                        alt="arroew"
                      />
                      <img
                        className="hover-img"
                        src={e.hoverbtn}
                        alt="hoverArrow"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {EventData.slice(3, 6).map((e, i) => (
            <div className="col-md-4">
              <Link
                to={`/Home/Events/Event_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="event-col">
                  <div className="event-img">
                    <img src={e.img} alt="event1" />
                  </div>
                  <div className="event-text">
                    <div className="eve-txt">
                      <span>{e.title}</span>
                    </div>
                    <div className="eve-img">
                      <img
                        className="normal-img"
                        src={e.arrowbtn}
                        alt="arroew"
                      />
                      <img
                        className="hover-img"
                        src={e.hoverbtn}
                        alt="hoverArrow"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {EventData.slice(6, 9).map((e, i) => (
            <div className="col-md-4">
              <Link
                to={`/Home/Events/Event_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="event-col">
                  <div className="event-img">
                    <img src={e.img} alt="event1" />
                  </div>
                  <div className="event-text">
                    <div className="eve-txt">
                      <span>{e.title}</span>
                    </div>
                    <div className="eve-img">
                      <img
                        className="normal-img"
                        src={e.arrowbtn}
                        alt="arroew"
                      />
                      <img
                        className="hover-img"
                        src={e.hoverbtn}
                        alt="hoverArrow"
                      />
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

export default EventComponent;
