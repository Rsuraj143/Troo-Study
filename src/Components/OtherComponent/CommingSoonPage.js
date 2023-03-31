import React from "react";
import "./CommingSoonPage.css";
import { TbBrandInstagram } from "react-icons/tb";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import dotSpacing from "../../images/dot-spcing.png";
import cross from "../../images/crose.png"
import twodot from "../../images/two-dot.png"

const CommingSoonPage = () => {
  return (
    <div id="troo-da-coming-soon" class="troo-da-coming-soon">
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div class="vert-move">
        <img src={dotSpacing} alt="dotSpacing" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="coming-text">
              <div class="zoom-in-zoom-out">
                <img src={cross} alt="cross" />
              </div>
              <div class="commingsoon-title">
                We Are <br />
                Coming Very Soon
              </div>
              <p>
                We are working hard to give you a better experience
                <br />
                with our new impressive site. Stay connected, Stay updated!{" "}
              </p>
              <span>
                For more inquiry: <Link href="#">contact@troostudy.com</Link>
              </span>
              <div class="foot-socail">
                <span>Social Media</span>
                <ul>
                  <li>
                    <Link to="/">
                      <TiSocialLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TbBrandInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TiSocialTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TiSocialFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="fome-section">
              <div class="fomr-tile">Contact With Us</div>
              <p>Lorem ipsum doller sit it is simply dumy text.</p>
              <form class="row g-3">
                <div class="col-md-12">
                  <div class="field">
                    <input type="name" class="form-control" id="inputName" />
                    <label for="inputName" class="form-label">
                      Your Name
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <input type="phone" class="form-control" id="inputPhone" />
                    <label for="inputPhone" class="form-label">
                      Your Phone
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <input type="email" class="form-control" id="inputEmail" />
                    <label for="inputEmail" class="form-label">
                      Your Email
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <input
                      type="subject"
                      class="form-control"
                      id="inputsubject"
                    />
                    <label for="inputSubject" class="form-label">
                      Subject
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="field">
                    <input
                      type="Whrite"
                      class="form-control"
                      id="inputWhrite"
                    />
                    <label for="inputWhrite" class="form-label">
                      Whrite something
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btnn btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="dot-zik">
              <img src={twodot} alt="twodot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoonPage;
