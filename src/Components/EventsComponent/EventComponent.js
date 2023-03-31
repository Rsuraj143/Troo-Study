import React from "react";
import "./EventComponent.css";
import { EventData } from "./EventData";

const EventComponent = () => {
  return (
    <div class="troo-da-event-section" id="troo-da-event-section">
      <div class="container">
        <div class="row">
          {EventData.slice(0, 3).map((e, i) => (
            <div class="col-md-4">
              <div class="event-col">
                <div class="event-img">
                  <img src={e.img} alt="event1" />
                </div>
                <div class="event-text">
                  <div class="eve-txt">
                    <span>{e.title}</span>
                  </div>
                  <div class="eve-img">
                    <img class="normal-img" src={e.arrowbtn} alt="arroew" />
                    <img class="hover-img" src={e.hoverbtn} alt="hoverArrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {EventData.slice(3, 6).map((e, i) => (
            <div class="col-md-4">
              <div class="event-col">
                <div class="event-img">
                  <img src={e.img} alt="event1" />
                </div>
                <div class="event-text">
                  <div class="eve-txt">
                    <span>{e.title}</span>
                  </div>
                  <div class="eve-img">
                    <img class="normal-img" src={e.arrowbtn} alt="arroew" />
                    <img class="hover-img" src={e.hoverbtn} alt="hoverArrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          {EventData.slice(6, 9).map((e, i) => (
            <div class="col-md-4">
              <div class="event-col">
                <div class="event-img">
                  <img src={e.img} alt="event1" />
                </div>
                <div class="event-text">
                  <div class="eve-txt">
                    <span>{e.title}</span>
                  </div>
                  <div class="eve-img">
                    <img class="normal-img" src={e.arrowbtn} alt="arroew" />
                    <img class="hover-img" src={e.hoverbtn} alt="hoverArrow" />
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

export default EventComponent;
