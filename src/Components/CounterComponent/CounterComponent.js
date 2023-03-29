import React, { useState } from "react";
import "./CounterComponent.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterComponent = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div class="troo-da-counter-section" id="troo-da-counter-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="conter-sec">
              <div class="row">
                <div class="col-md-3">
                  <div class="text-conter">
                    <h3>Let’s Start Your Education Journey.</h3>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="counter-box">
                        <div class="num-col">01</div>
                        <div class="conter-tx">
                          <ScrollTrigger
                            onEnter={() => setCounter(true)}
                            onExit={() => setCounter(false)}
                          >
                            {counter && (
                              <CountUp
                                start={0}
                                end={36}
                                duration={2}
                                delay={0}
                                className="counter"
                              />
                            )}
                            <strong>K</strong>
                          </ScrollTrigger>
                          <p>Students Anroll</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="counter-box">
                        <div class="num-col">02</div>
                        <div class="conter-tx">
                          <ScrollTrigger
                            onEnter={() => setCounter(true)}
                            onExit={() => setCounter(false)}
                          >
                            {counter && (
                              <CountUp
                                start={2000}
                                end={2500}
                                duration={2}
                                delay={0}
                                className="counter"
                              />
                            )}
                            <strong>+</strong>
                          </ScrollTrigger>
                          <p>Study Courses</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="counter-box">
                        <div class="num-col">03</div>
                        <div class="conter-tx">
                          <ScrollTrigger
                            onEnter={() => setCounter(true)}
                            onExit={() => setCounter(false)}
                          >
                            {counter && (
                              <CountUp
                                start={0}
                                end={100}
                                duration={2}
                                delay={0}
                                className="counter"
                              />
                            )}
                            <strong>+</strong>
                          </ScrollTrigger>
                          <p>Global Universities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
